"use server";

import prisma from "@/lib/clients";
import { sendMail } from "../mailSending";
import { generateEmailTemplate } from "@/lib/emailTemplates/emailTemplate";
import { newUniversityEmailTemplate } from "@/lib/emailTemplates/newUniversityEmailTemplate";

// Types for better type safety
interface StudentUniversityUpdate {
  country?: string;
  courseName?: string;
  currentStatus?: any;
  financialDocumentationConsultation?: boolean;
  fundsMaturedInTheBank?: boolean;
  statusNotes?: string;
  tbTestCompleted?: boolean;
  tuitionPaid?: boolean;
  courseUrl?: string;
  annualTutionFee?: string;
  scholarship?: string;
  initialUniversityFee?: string;
  requiredIELTSScore?: string;
}

interface EmailTemplateData extends StudentUniversityUpdate {
  name: string;
  logoUrl?: string;
  portalUrl?: string;
  websiteUrl?: string;
  websiteName?: string;
}

const newStudentUniversity = async (data: any, studentId: number) => {
  try {
    const res = await prisma.studentUniversities.create({
      data: {
        studentId,
        ...data,
      },
      include: {
        university: true,
        currentStatus: true,
        student: true,
      },
    });

    const emailData: any = {
      country: res.country,
      courseName: res.courseName,
      currentStatus: res.currentStatus.label,
      university: res.university.name,
      // Add any additional configuration data here
      logoUrl: "https://uniguru.co/logo.png",
      portalUrl: "https://uniguru.co/login",
      websiteUrl: "https://www.uniguru.co",
      websiteName: "www.uniguru.co",
    };

    // Generate and send email
    const htmlContent = await newUniversityEmailTemplate(emailData);
    await sendMail(
      "Uniguru",
      res?.student?.email,
      "New University Application Added",
      htmlContent,
      "support@uniguru.co"
    );

    return res;
  } catch (error) {
    throw error;
  }
};

const getUniversitiesByStudentId = async (studentId: number) => {
  const res = await prisma.studentUniversities.findMany({
    where: {
      studentId,
    },
    include: {
      university: true,
      currentStatus: true,
      student: true,
    },
  });
  return res;
};

// Main update function
const updateStudentUniversity = async (id: number, data: any) => {
  try {
    // Perform the update
    const res = await prisma.studentUniversities.update({
      where: { id },
      data: {
        ...(data?.country && { country: data.country }),
        ...(data?.courseName && { courseName: data.courseName }),
        ...(data?.currentStatus && {
          currentStatusId: data.currentStatus.value,
        }),
        ...(data.hasOwnProperty("financialDocumentationConsultation") && {
          financialDocumentationConsultation:
            data.financialDocumentationConsultation,
        }),
        ...(data.hasOwnProperty("fundsMaturedInTheBank") && {
          fundsMaturedInTheBank: data.fundsMaturedInTheBank,
        }),
        ...(data?.statusNotes && { statusNotes: data.statusNotes }),
        ...(data.hasOwnProperty("tbTestCompleted") && {
          tbTestCompleted: data.tbTestCompleted,
        }),
        ...(data.hasOwnProperty("tuitionPaid") && {
          tuitionPaid: data.tuitionPaid,
        }),
        ...(data?.courseUrl && { courseUrl: data.courseUrl }),
        ...(data?.annualTutionFee && { annualTutionFee: data.annualTutionFee }),
        ...(data?.scholarship && { scholarship: data.scholarship }),
        ...(data?.initialUniversityFee && {
          initialUniversityFee: data.initialUniversityFee,
        }),
        ...(data?.requiredIELTSScore && {
          requiredIELTSScore: data.requiredIELTSScore,
        }),
      },
      include: {
        university: true,
        currentStatus: true,
        student: true,
      },
    });

    // Prepare email data
    const emailData: EmailTemplateData = {
      ...data,
      name: res.university.name,
      // Add any additional configuration data here
      logoUrl: "https://uniguru.co/logo.png",
      portalUrl: "https://uniguru.co/login",
      websiteUrl: "https://www.uniguru.co",
      websiteName: "www.uniguru.co",
    };

    // Generate and send email
    const htmlContent = generateEmailTemplate(emailData);
    await sendMail(
      "Uniguru",
      res?.student?.email,
      "Your Application Update",
      htmlContent,
      "support@uniguru.co"
    );

    return res;
  } catch (error) {
    console.error("Error updating student university:", error);
    throw error;
  }
};

const deleteStudentUniversity = async (id: number) => {
  const res = await prisma.studentUniversities.delete({
    where: {
      id,
    },
  });
  return res;
};

export {
  newStudentUniversity,
  getUniversitiesByStudentId,
  updateStudentUniversity,
  deleteStudentUniversity,
};
