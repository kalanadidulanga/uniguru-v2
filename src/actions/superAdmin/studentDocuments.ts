"use server";

import prisma from "@/lib/clients";
import { sendMail } from "../mailSending";
import { generateStudentDocumentEmailTemplate } from "@/lib/emailTemplates/studentDocumentEmailTemplate";

const getStudentDocumentsById = async (id: string) => {
  const student = await prisma.studentDocuments.findUnique({
    where: {
      studentId: parseInt(id),
    },
  });

  return student;
};

const updateStudentDocuments = async (data: any, id: string) => {
  try {
    console.log(data);

    const res = await prisma.studentDocuments.update({
      where: {
        studentId: parseInt(id),
      },
      data: {
        ...(data.hasOwnProperty("completedUniguruForm") && {
          completedUniguruForm: data.completedUniguruForm,
        }),
        ...(data.hasOwnProperty("passportCopy") && {
          passportCopy: data.passportCopy,
        }),
        ...(data.hasOwnProperty("ol") && { ol: data.ol }),
        ...(data.hasOwnProperty("al") && { al: data.al }),
        ...(data.hasOwnProperty("degreeCertificate") && {
          degreeCertificate: data.degreeCertificate,
        }),
        ...(data.hasOwnProperty("degreeTranscript") && {
          degreeTranscript: data.degreeTranscript,
        }),
        ...(data.hasOwnProperty("ieltsCertificate") && {
          ieltsCertificate: data.ieltsCertificate,
        }),
        ...(data.hasOwnProperty("anUpToDateCV") && {
          anUpToDateCV: data.anUpToDateCV,
        }),
        ...(data.hasOwnProperty("statementOfPurpose") && {
          statementOfPurpose: data.statementOfPurpose,
        }),
        ...(data.hasOwnProperty("academicReferenceLetters") && {
          academicReferenceLetters: data.academicReferenceLetters,
        }),
        ...(data.hasOwnProperty("professionalReferenceLetters") && {
          professionalReferenceLetters: data.professionalReferenceLetters,
        }),
        ...(data.hasOwnProperty("serviceLetters") && {
          serviceLetters: data.serviceLetters,
        }),

        ...(data?.notes && { notes: data.notes }),
      },
      include: {
        student: true,
      },
    });

    const emailData: any = {
      ...data,
      // Add any additional configuration data here
      logoUrl: "https://uniguru.co/logo.png",
      portalUrl: "https://uniguru.co/login",
      websiteUrl: "https://www.uniguru.co",
      websiteName: "www.uniguru.co",
    };

    // Generate and send email
    const htmlContent = generateStudentDocumentEmailTemplate(emailData);
    await sendMail(
      "Uniguru",
      res?.student?.email,
      "Your Application Update",
      htmlContent,
      "support@uniguru.co"
    );

    return res;
  } catch (error) {
    console.error("Error updating student documents:", error);
    throw new Error("Failed to update student documents");
  }
};

export { getStudentDocumentsById, updateStudentDocuments };
