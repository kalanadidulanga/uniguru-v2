"use server";

import prisma from "@/lib/clients";

const getProfileDetails = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Failed to get superAdmins");
  }
};

export { getProfileDetails };
