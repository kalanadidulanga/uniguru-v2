"use server";

import prisma from "@/lib/clients";
import { hash } from "bcryptjs";
import { ZodError } from "zod";
import { sendMail } from "../mailSending";

const addPartnerAction = async (data: any) => {
  const users = await prisma.user.findMany({
    where: {
      email: data.email,
    },
  });

  if (users.length > 0) {
    throw new Error("Email already exists");
  }

  const partners = await prisma.partners.findMany({
    where: {
      OR: [{ nic: data.nic }, { partnerCode: data.partnerCode }],
    },
  });

  if (partners.length > 0) {
    throw new Error("NIC or Partner Code already exists");
  }

  try {
    // Create user
    const user = await prisma.user.create({
      data: {
        name: data.displayName,
        email: data.email,
        password: await hash(data.password, 10),
        role: "partner",
      },
    });

    // Create partner
    const partner = await prisma.partners.create({
      data: {
        userId: user.id,
        nic: data.nic,
        fullName: data.fullName,
        partnerCode: data.partnerCode,
        mobile: data.mobile,
      },
    });

    // Prepare HTML content with actual data interpolation
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
            color: #333333;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img
              src="https://uniguru.co/logo.png"
              alt="Uniguru Logo"
            />
          </div>
          <div class="content">
            <h2>Welcome to Uniguru, ${data.fullName}!</h2>
            <p class="message">
              We are thrilled to have you onboard as one of our partners. Your
              expertise and dedication will be key in helping students navigate
              their educational journey. Below are your login details to access the
              Uniguru Partner Portal via the link below.
            </p>
            <a href="https://uniguru.co/login" target="_blank">https://uniguru.co/login</a>
            <div class="details">
              <h3>Your Login Details:</h3>
              <table>
                <tr>
                  <th>Full Name</th>
                  <td>${data.fullName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${data.email}</td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>${data.password}</td>
                </tr>
                <tr>
                  <th>Agent Code</th>
                  <td>${data.partnerCode}</td>
                </tr>
                <tr>
                  <th>Short Name</th>
                  <td>${data.displayName}</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <td>${data.mobile}</td>
                </tr>
              </table>
            </div>

            <p class="message">
              We encourage you to log in and explore the partner portal where you
              can manage student applications, track progress, and access all the
              tools you need to succeed as a Uniguru partner. We are here to support
              you every step of the way!
            </p>

            <p class="message">
              If you have any questions or need assistance, feel free to reach out
              to our support team at <a href="mailto:support@uniguru.co">support@uniguru.co</a>.
            </p>

            <p class="message">
              We look forward to a successful partnership and many great
              achievements together.
            </p>
          </div>
          <div class="footer">
            <p>
              Thank you,<br />
              The Uniguru Team<br />
              <a href="https://www.uniguru.co">www.uniguru.co</a>
            </p>
          </div>
        </div>
      </body>
    </html>
    `;

    await sendMail(
      "Uniguru Partner Registration",
      data.email,
      "Uniguru Partner Registration",
      htmlContent,
      "info@uniguru.co"
    );

    return { user, partner }; // Return the created objects for further use
  } catch (error: any) {
    // If the error is a Zod validation error
    if (error instanceof ZodError) {
      throw new Error(
        `Validation Error: ${error.errors.map((err) => err.message).join(", ")}`
      );
    }

    // If it's a unique constraint violation from Prisma
    else if (error.code === "P2002") {
      const targetField = error.meta?.target; // Retrieve the field name causing the conflict
      throw new Error(`${targetField} already exists.`);
    }

    // Handle any other unexpected errors
    else {
      console.error(error); // Log the error for debugging
      throw new Error("Failed to create partner due to an unexpected error.");
    }
  }
};

const editPartnerAction = async (data: any) => {
  const id = parseInt(data.id);
  const userId = parseInt(data.userId);
  // Check if email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser && existingUser.id !== userId) {
    throw new Error("Email already exists");
  }

  // Check if NIC or Partner Code already exists
  const existingPartner = await prisma.partners.findFirst({
    where: {
      OR: [{ nic: data.nic }, { partnerCode: data.partnerCode }],
      NOT: { id: id }, // Exclude the current partner being edited
    },
  });

  if (existingPartner) {
    throw new Error("NIC or Partner Code already exists");
  }

  try {
    // Transaction ensures atomic updates
    const result = await prisma.$transaction(async (prisma) => {
      // Update user
      const user = await prisma.user.update({
        data: {
          name: data.displayName,
          email: data.email,
          ...(data.password && { password: await hash(data.password, 10) }), // Only update password if provided
        },
        where: {
          id: userId,
        },
      });

      // Update partner
      const partner = await prisma.partners.update({
        data: {
          nic: data.nic,
          fullName: data.fullName,
          partnerCode: data.partnerCode,
          mobile: data.mobile,
        },
        where: {
          id: id,
        },
      });

      return { user, partner }; // Return updated objects
    });

    return result;
  } catch (error: any) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      throw new Error(
        `Validation Error: ${error.errors.map((err) => err.message).join(", ")}`
      );
    }

    // Handle Prisma unique constraint violation error
    if (error.code === "P2002") {
      const targetField = error.meta?.target; // Get the conflicting field name
      throw new Error(`${targetField} already exists.`);
    }

    // Handle any other unexpected errors
    console.error("Error during partner edit:", error);
    throw new Error("Failed to update partner due to an unexpected error.");
  }
};

const getPartners = async (query: string) => {
  try {
    const partners = await prisma.partners.findMany({
      where: {
        OR: [
          { nic: { contains: query } },
          { fullName: { contains: query } },
          { partnerCode: { contains: query } },
          { mobile: { contains: query } },
        ],
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return partners;
  } catch (error) {
    throw new Error("Failed to get partners");
  }
};

const deletePartnerAndUser = async (id: number) => {
  try {
    // Delete the partners associated with the userId
    await prisma.partners.deleteMany({
      where: {
        userId: id,
      },
    });

    // Delete the user by id
    await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return true;
  } catch (error) {
    console.error(error); // Log error for debugging
    throw new Error("Failed to delete user and partners");
  }
};

const getPartnerCodes = async () => {
  try {
    const partnerCodes = await prisma.partners.findMany({
      select: {
        partnerCode: true,
      },
    });
    return partnerCodes;
  } catch (error) {
    throw new Error("Failed to get partner codes");
  }
};

export {
  addPartnerAction,
  getPartners,
  deletePartnerAndUser,
  editPartnerAction,
  getPartnerCodes,
};
