"use server";

import prisma from "@/lib/clients";

const getStudentsByPartnerCode = async (userId: any, page = 1, limit = 10) => {
  try {
    const partner = await prisma.partners.findUnique({
      where: {
        userId: parseInt(userId),
      },
    });

    const offset = (page - 1) * limit;

    const result = await prisma.students.findMany({
      where: {
        agentcode: partner?.partnerCode,
      },
      include: {
        intake: true,
        user: true,
        studentUniversities: {
          include: {
            university: true,
            currentStatus: true,
          },
        },
        studentDocuments: true,
        StudentQuestionnaireo: true,
        partners: true,
      },
      orderBy: {
        id: "desc",
      },
      skip: offset, // Number of records to skip
      take: limit, // Number of records to fetch
    });

    const totalCount = await prisma.students.count({
      where: {
        agentcode: partner?.partnerCode,
      },
    });

    return {
      data: result,
      totalCount,
    };
  } catch (error) {
    throw new Error("Failed to get questionnaire");
  }
};

export { getStudentsByPartnerCode };
