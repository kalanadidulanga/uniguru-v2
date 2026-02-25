"use server";

import prisma from "@/lib/clients";
import { hash } from "bcryptjs";

const addNewUser = async (data: any) => {
  const users = await prisma.user.findMany({
    where: {
      email: data.email,
    },
  });

  if (users.length > 0) {
    throw new Error("Email already exists");
  }

  try {
    // Create user
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: await hash(data.password, 10),
        role: data.role,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
};

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            role: "superadmin",
          },
          {
            role: "admin",
          },
        ],
      },
      orderBy: {
        id: "desc",
      },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get users");
  }
};

const deleteUser = async (id: number) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    if (user) {
      return true;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
};

const blockUser = async (id: number) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        isBlock: true,
      },
    });
    if (user) {
      return true;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to block user");
  }
};

export { addNewUser, getUsers, deleteUser, blockUser };
