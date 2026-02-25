"use server";

import prisma from "@/lib/clients";

const getUniversityList = async (id?: number) => {
  const res = await prisma.universitiesList.findMany({
    include: {
      destination: true,
    },
    where: id ? { destinationId: id } : {}, // Only filter by destinationId if id is provided
    orderBy: {
      id: "desc",
    },
  });
  return res;
};

const addNewUniversity = async (data: any) => {
  const res = await prisma.universitiesList.create({ data });
  if (res) {
    return res;
  }
};

const deleteUniversity = async (id: number) => {
  const res = await prisma.universitiesList.delete({
    where: {
      id,
    },
  });
  if (res) {
    return res;
  }
};

export { getUniversityList, addNewUniversity, deleteUniversity };
