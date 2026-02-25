"use server";

import prisma from "@/lib/clients";
import { hash } from "bcryptjs";
import { ZodError } from "zod";
import { sendMail } from "../mailSending";
import { generatePartnerEmailTemplate } from "@/lib/emailTemplates/PartnerMailTemplate";

const addStudentAction = async (data: any) => {
  const users = await prisma.user.findMany({
    where: {
      email: data.email,
    },
  });

  if (users.length > 0) {
    throw new Error("Email already exists");
  }

  // Create user
  // const user = await prisma.user.create({
  //   data: {
  //     name: data.displayName,
  //     email: data.email,
  //     password: await hash(data.password, 10),
  //     role: "student",
  //   },
  // });

  const student = await prisma.students.create({
    data: {
      StudentQuestionnaireoId: parseInt(data?.id),
      email: data?.email,
      name: data?.name,
      agentcode: data?.agentcode || null,
      mobile: data?.mobile,
      intakeId: parseInt(data.intakeId),
    },
  });

  await prisma.studentDocuments.create({
    data: {
      studentId: student.id,
    },
  });

  await prisma.studentQuestionnaires.update({
    where: {
      id: parseInt(data?.id),
    },
    data: {
      status: "Accepted",
    },
  });

  return { student }; // Return the created objects for further use
};

const getStudents = async (
  page = 1,
  limit = 10,
  searchQuery = "",
  intakeId = "",
  status = ""
) => {
  console.log("Search Query:", searchQuery); // Log the search query

  try {
    const offset = (page - 1) * limit;

    // Build search conditions for students
    const searchConditions = {
      AND: [
        searchQuery
          ? {
              OR: [
                { name: { contains: searchQuery } },
                { email: { contains: searchQuery } },
                { mobile: { contains: searchQuery } },
                { agentcode: { contains: searchQuery } },
                { status: { contains: searchQuery } },
              ],
            }
          : {},
        intakeId ? { intakeId: parseInt(intakeId) } : {},
        status ? { status: status } : {},
      ],
    };

    const result = await prisma.students.findMany({
      where: searchConditions,
      include: {
        intake: true,
        user: true,
        studentUniversities: true,
        studentDocuments: true,
        StudentQuestionnaireo: true,
      },
      orderBy: {
        id: "desc",
      },
      skip: offset,
      take: limit,
    });

    // Count with the same search conditions
    const totalCount = await prisma.students.count({
      where: searchConditions,
    });

    return {
      data: result,
      totalCount,
    };
  } catch (error) {
    console.error("Error fetching students:", error); // Log the actual error
    throw new Error("Failed to get students");
  }
};

const getStudentById = async (id: number) => {
  const student = await prisma.students.findUnique({
    where: {
      id: id,
    },
    include: {
      intake: true,
      user: true,
      studentUniversities: true,
      studentDocuments: true,
      StudentQuestionnaireo: true,
    },
  });

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
};

const createStudentAccount = async (data: any) => {
  // Check if user with the given email already exists
  const existingUsers = await prisma.user.findMany({
    where: {
      email: data.email,
    },
  });

  if (existingUsers.length > 0) {
    throw new Error("Email already exists");
  }

  try {
    // Create a new user account
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: await hash(data.password, 10),
        role: "student",
      },
    });

    // Associate the newly created user with the student
    await prisma.students.update({
      where: {
        id: data.id, // Assuming 'id' refers to the student ID
      },
      data: {
        userId: user.id,
      },
    });

    // Prepare email content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding: 10px 0;
          }
          .header img {
            width: 150px;
          }
          .content {
            margin-top: 20px;
            line-height: 1.6;
          }
          .content h2 {
            color: #333333;
            text-align: center;
            margin-bottom: 20px;
          }
          .message {
            font-size: 16px;
            color: #555555;
            text-align: justify;
          }
          .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            text-align: center;
          }
          .details {
            margin-top: 30px;
          }
          .details table {
            width: 100%;
            border-collapse: collapse;
          }
          .details table th,
          .details table td {
            padding: 10px;
            border: 1px solid #dddddd;
            text-align: left;
          }
          .details table th {
            background-color: #f4f4f4;
            color: #333333;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 14px;
            color: #888888;
          }
          .footer a {
            color: #007BFF;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img
              src="https://uniguru.co/logo.png"
              alt="UNIGURU Logo"
            />
          </div>
          <div class="content">
            <h2>Welcome to UNIGURU, ${data.name}!</h2>
            <p class="message">
              We are excited to welcome you to UNIGURU. Your student account has been created, and you can now access the student portal to start your journey with us.
            </p>
            <a href="https://uniguru.co/login" target="_blank">https://uniguru.co/login</a>
            <div class="details">
              <h3>Your Login Details:</h3>
              <table>
                <tr>
                  <th>Full Name</th>
                  <td>${data.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${data.email}</td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>${data.password}</td>
                </tr>
              </table>
            </div>
            <p class="message">
              You can log in to the student portal using the credentials provided above. If you have any questions or need assistance, feel free to reach out to our support team at <a href="mailto:support@uniguru.co">support@uniguru.co</a>.
            </p>
            <p class="message">
              We look forward to supporting you throughout your educational journey with UNIGURU.
            </p>
          </div>
          <div class="footer">
            <p>
              Best regards,<br />
              The UNIGURU Team<br />
              <a href="https://www.uniguru.co">www.uniguru.co</a>
            </p>
          </div>
        </div>
      </body>
    </html>
    `;

    // Send confirmation email to the new student
    await sendMail(
      "Student Account Created",
      data.email,
      "Welcome to UNIGURU!",
      htmlContent,
      "support@uniguru.co"
    );

    return user; // Return the newly created user
  } catch (error: any) {
    // If it's a Prisma unique constraint violation
    if (error.code === "P2002") {
      const targetField = error.meta?.target; // Retrieve the field name causing the conflict
      throw new Error(`${targetField} already exists.`);
    }

    // Catch any other unexpected errors
    else {
      console.error(error); // Log the error for debugging
      throw new Error("Failed to create student due to an unexpected error.");
    }
  }
};

const updateStudentAccount = async (data: any) => {
  // Check if the email already exists but exclude the current user from the check
  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email,
      NOT: {
        id: data.userId, // Exclude the user being updated
      },
    },
  });

  if (existingUser) {
    throw new Error("Email already exists. Please use a different email.");
  }

  // Update user information
  const updatedUser = await prisma.user.update({
    data: {
      name: data.name,
      email: data.email,
      password: await hash(data.password, 10),
    },
    where: {
      id: data.userId,
    },
  });

  return updatedUser;
};

const updateStudent = async (data: any) => {
  if (data.userId) {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: data.email,
        NOT: {
          id: data.userId, // Exclude the user being updated
        },
      },
    });

    if (existingUser) {
      throw new Error("Email already exists. Please use a different email.");
    }

    await prisma.user.update({
      where: {
        id: data.userId,
      },
      data: {
        email: data.email,
      },
    });
  }

  const student = await prisma.students.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      consultationDone: data.consultationDone,
      cvSOPAssitance: data.cvSOPAssitance,
      feedbackReportSent: data.feedbackReportSent,
      intakeId: parseInt(data.intakeId),
      notes: data.notes,
      status: data.status,
    },
    include: {
      intake: true,
      partners: {
        include: {
          user: true,
        },
      },
    },
  });

  console.log(student);

  if (student?.partners?.user) {
    const emailData: any = {
      ...student,
      // Add any additional configuration data here
      logoUrl: "https://uniguru.co/logo.png",
      portalUrl: "https://uniguru.co/login",
      websiteUrl: "https://www.uniguru.co",
      websiteName: "www.uniguru.co",
    };

    // Generate and send email
    const htmlContent = generatePartnerEmailTemplate(emailData);
    await sendMail(
      "Uniguru",
      student.partners.user.email,
      "Your Application Update",
      htmlContent,
      "support@uniguru.co"
    );
  }
  return student;
  // return true;
};

const deleteStudent = async (id: number, userId: number) => {
  await prisma.studentUniversities.deleteMany({
    where: {
      studentId: id,
    },
  });

  await prisma.studentDocuments.delete({
    where: {
      studentId: id,
    },
  });

  const student = await prisma.students.delete({
    where: {
      id: id,
    },
  });

  if (userId) {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

  await prisma.studentQuestionnaires.update({
    data: {
      status: "StudentDeleted",
    },
    where: {
      id: student.StudentQuestionnaireoId,
    },
  });

  return student;
};

const getStudentUniversityStatus = async () => {
  const res = await prisma.studentUniversitiesStatus.findMany();

  return res;
};

export {
  addStudentAction,
  getStudents,
  getStudentById,
  createStudentAccount,
  updateStudentAccount,
  updateStudent,
  deleteStudent,
  getStudentUniversityStatus,
};
