"use server";

import prisma from "@/lib/clients";

const getStudentByUserId = async (id: number) => {
  const student = await prisma.students.findUnique({
    where: {
      userId: id,
    },
    include: {
      intake: true,
      user: true,
      studentUniversities: true,
      studentDocuments: true,
      StudentQuestionnaireo: true,
    },
  });

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
};

export { getStudentByUserId };
