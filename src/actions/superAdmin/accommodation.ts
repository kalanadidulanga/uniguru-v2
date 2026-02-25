"use server";

import prisma from "@/lib/clients";

const addNewAccommodation = async (data: any) => {
  try {
    const accommodation = await prisma.accommodation.create({
      data: data,
    });
    if (accommodation) {
      return accommodation;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create accommodation");
  }
};

const getAccommodationList = async (id?: number) => {
  const res = await prisma.accommodation.findMany({
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

const getAccommadationforClient = async (country: any) => {
  try {
    const res = await prisma.destination.findUnique({
      where: {
        destination: country,
      },
    });
    const id = res?.id;
    const res2 = await prisma.accommodation.findMany({
      where: {
        destinationId: id,
      },
      include: {
        destination: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return res2;
  } catch (error) {
    throw new Error("Failed to get Accommodation");
  }
};

const deleteAccommodation = async (id: number) => {
  const res = await prisma.accommodation.delete({
    where: {
      id: id,
    },
  });
  return res;
};

export {
  addNewAccommodation,
  getAccommodationList,
  getAccommadationforClient,
  deleteAccommodation,
};
