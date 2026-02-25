"use server";

import prisma from "@/lib/clients";

const getProfileDetails = async (id: number) => {
  try {
    const user = await prisma.partners.findUnique({
      include: {
        user: true,
      },
      where: {
        userId: id,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Failed to get partners");
  }
};

export { getProfileDetails };
