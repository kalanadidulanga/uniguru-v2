"use server";

import prisma from "@/lib/clients";
import { compare, hash } from "bcryptjs";

const createUser = async () => {
  let data = {
    name: "KayD",
    email: "dev.kalanadidulanga@gmail.com",
    password: await hash("ikgKD@2005", 10), // Usually hashed
    role: "superadmin",
  };

  try {
    const user = await prisma.user.create({
      data: data,
    });
    // console.log(user);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
};

const toggleBlockUser = async (id: number) => {
  try {
    // Fetch the current user to get their current `isBlock` status
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        isBlock: true, // Only fetch the isBlock field
      },
    });

    // If the user is not found, throw an error
    if (!user) {
      throw new Error("User not found");
    }

    // Toggle the isBlock value
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        isBlock: !user.isBlock, // Toggle the value of isBlock
      },
    });

    return updatedUser; // Return the updated user or true if preferred
  } catch (error) {
    console.error(error);
    throw new Error("Failed to toggle block status");
  }
};

const changePassword = async (
  id: number,
  oldPassword: string,
  newPassword: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!(await compare(oldPassword, user.password))) {
    throw new Error("Incorrect old password");
  }

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: await hash(newPassword, 10),
      },
    });

    return updatedUser; // Return the updated user or true if preferred
  } catch (error) {
    console.error(error);
    throw new Error("Failed to change password");
  }
};

export { createUser, toggleBlockUser, changePassword };
