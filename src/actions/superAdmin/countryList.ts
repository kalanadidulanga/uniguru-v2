"use server";

import prisma from "@/lib/clients";

export const getCountryList = async () => {
  const res = await prisma.destination.findMany();
  if (res) {
    return res;
  }
};
