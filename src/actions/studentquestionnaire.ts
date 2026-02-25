"use server";

import prisma from "@/lib/clients";
import { sendNewQuestionnaireSubmitted } from "./mailSending";

const submitQuestionnaire = async (data: any) => {
  const emailfound = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (emailfound) {
    throw new Error("Email already exists");
  }

  const { agentcode, ...rest } = data;

  try {
    const result = await prisma.studentQuestionnaires.create({
      data: {
        ...rest,
        agentcode: agentcode || null, // Ensure agentcode is set to null if not provided
      },
    });
    await sendNewQuestionnaireSubmitted(data);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getQuestionnaires = async (
  page = 1,
  limit = 10,
  searchQuery = "",
  status = ""
) => {
  console.log("Search Query:", searchQuery); // Log the search query

  try {
    const offset = (page - 1) * limit;

    // Build search conditions
    const searchConditions = {
      AND: [
        searchQuery
          ? {
              OR: [
                { name: { contains: searchQuery } },
                { email: { contains: searchQuery } },
                { mobile: { contains: searchQuery } },
                { agentcode: { contains: searchQuery } },
                { status: { contains: searchQuery } },
              ],
            }
          : {},
        status ? { status: { contains: status } } : {},
      ],
    };

    const result = await prisma.studentQuestionnaires.findMany({
      where: searchConditions,
      include: {
        intake: true,
      },
      orderBy: {
        id: "desc",
      },
      skip: offset,
      take: limit,
    });

    // Count with the same search conditions
    const totalCount = await prisma.studentQuestionnaires.count({
      where: searchConditions,
    });

    return {
      data: result,
      totalCount,
    };
  } catch (error) {
    console.error("Error fetching questionnaires:", error); // Log the actual error
    throw new Error("Failed to get questionnaires");
  }
};

const getQuestionnairesByPartnerCode = async (
  userId: any,
  page = 1,
  limit = 10
) => {
  try {
    const partner = await prisma.partners.findUnique({
      where: {
        userId: parseInt(userId),
      },
    });

    const offset = (page - 1) * limit;

    const result = await prisma.studentQuestionnaires.findMany({
      where: {
        agentcode: partner?.partnerCode,
      },
      include: {
        intake: true,
      },
      orderBy: {
        id: "desc",
      },
      skip: offset, // Number of records to skip
      take: limit, // Number of records to fetch
    });

    const totalCount = await prisma.studentQuestionnaires.count({
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

const rejectQuestionnaire = async (id: any) => {
  try {
    const result = await prisma.studentQuestionnaires.update({
      where: {
        id: parseInt(id),
      },
      data: {
        status: "Rejected",
      },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to reject questionnaire");
  }
};

const deleteQuestionnaire = async (id: any) => {
  try {
    const result = await prisma.studentQuestionnaires.delete({
      where: {
        id: parseInt(id),
      },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to delete questionnaire");
  }
};

export {
  submitQuestionnaire,
  getQuestionnaires,
  getQuestionnairesByPartnerCode,
  rejectQuestionnaire,
  deleteQuestionnaire,
};
