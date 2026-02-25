"use server";

import prisma from "@/lib/clients";

const addMail = async (email: string) => {
  try {
    const response = await prisma.emails.create({
      data: {
        email,
      },
    });

    return response;
  } catch (error) {
    console.error("Error adding mail:", error);
    throw error;
  }
};

export { addMail };
