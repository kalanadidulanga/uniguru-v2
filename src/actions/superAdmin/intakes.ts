"use server";

import prisma from "@/lib/clients";

const newIntake = async (name: string) => {
  const intake = await prisma.intake
    .create({
      data: {
        name,
      },
    })
    .then((data) => {
      return data;
    });
};

const getIntakes = async () => {
  const intakes = await prisma.intake
    .findMany({
      orderBy: {
        id: "desc",
      },
    })
    .then((data) => {
      return data;
    });
  return intakes;
};

const getIntakesForClient = async () => {
  const intakes = await prisma.intake
    .findMany({
      where: {
        status: "Active",
      },
      orderBy: {
        id: "desc",
      },
    })
    .then((data) => {
      return data;
    });
  return intakes;
};

const closeIntake = async (id: number) => {
  const intake = await prisma.intake.update({
    where: {
      id: id,
    },
    data: {
      status: "Closed",
    },
  });
  return intake; // <--- Return the result of the update method
};

const activeIntake = async (id: number) => {
  const intake = await prisma.intake.update({
    where: {
      id: id,
    },
    data: {
      status: "Active",
    },
  });
  return intake; // <--- Return the result of the update method
};

const updateIntake = async (id: number, name: string) => {
  const intake = await prisma.intake.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  return intake; // <--- Return the result of the update method
};

const deleteIntake = async (id: number) => {
  const intake = await prisma.intake.delete({
    where: {
      id: id,
    },
  });
  return intake; // <--- Return the result of the update method
};

export {
  newIntake,
  getIntakes,
  closeIntake,
  activeIntake,
  updateIntake,
  deleteIntake,
  getIntakesForClient,
};
