"use server";

import prisma from "@/lib/clients";

// getDashboardData function that handles agentcode and optional intakeId
const getDashboardData = async (userId: any, intakeId?: any) => {
  try {
    // Step 1: Get partner information based on userId
    const partner = await prisma.partners.findUnique({
      where: {
        userId: parseInt(userId),
      },
    });

    const agentcode = partner?.partnerCode;

    // Step 2: Fetch total count of all questionnaires filtered by agentcode and optional intakeId
    const totalQuestionnairesCount = await prisma.studentQuestionnaires.count({
      where: {
        agentcode: agentcode,
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
    });

    // Step 3: Fetch questionnaires status counts filtered by agentcode and optional intakeId
    const questionnaires = await prisma.studentQuestionnaires.groupBy({
      by: ["status"],
      where: {
        agentcode: agentcode,
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
      _count: true,
    });

    // Step 4: Fetch total count of all students filtered by agentcode and optional intakeId
    const totalStudentsCount = await prisma.students.count({
      where: {
        agentcode: agentcode,
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
    });

    // Step 5: Fetch students status counts filtered by agentcode and optional intakeId
    const students = await prisma.students.groupBy({
      by: ["status"],
      where: {
        agentcode: agentcode,
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
      _count: true,
    });

    // Organize the data
    const questionnaireData = {
      total: totalQuestionnairesCount, // Total count of all questionnaires
      Accepted:
        questionnaires.find((q) => q.status === "Accepted")?._count || 0,
      Rejected:
        questionnaires.find((q) => q.status === "Rejected")?._count || 0,
      Pending: questionnaires.find((q) => q.status === "Pending")?._count || 0,
      StudentDeleted:
        questionnaires.find((q) => q.status === "StudentDeleted")?._count || 0,
    };

    const studentData = {
      total: totalStudentsCount, // Total count of all students
      Pending: students.find((s) => s.status === "Pending")?._count || 0,
      Positive: students.find((s) => s.status === "Positive")?._count || 0,
      Rejected: students.find((s) => s.status === "Rejected")?._count || 0,
      Completed: students.find((s) => s.status === "Completed")?._count || 0,
      CompletedAndPaid:
        students.find((s) => s.status === "Completed & Paid for Partner")
          ?._count || 0,
    };

    // Return the organized data
    return {
      questionnaires: questionnaireData,
      students: studentData,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard data");
  }
};

// getChartData function for getting student data for each active intake
const getChartData = async (userId: any) => {
  try {
    // Step 1: Get partner information based on userId
    const partner = await prisma.partners.findUnique({
      where: {
        userId: parseInt(userId),
      },
    });

    const agentcode = partner?.partnerCode;

    // Step 2: Get active intakes
    const activeIntakes = await prisma.intake.findMany({
      where: { status: "Active" }, // Only fetch active intakes
      select: { id: true, name: true }, // Select intake id and name
    });

    // Step 3: Loop through active intakes and count students
    const chartData = await Promise.all(
      activeIntakes.map(async (intake) => {
        // Total students for this intake filtered by agentcode
        const total = await prisma.students.count({
          where: {
            intakeId: intake.id,
            agentcode: agentcode, // Filter by agentcode
          },
        });

        // Completed students for this intake filtered by agentcode
        const completed = await prisma.students.count({
          where: {
            intakeId: intake.id,
            agentcode: agentcode, // Filter by agentcode
            status: {
              in: ["Completed", "Completed & Paid for Partner"],
            }, // Assuming 'Completed' marks a student as done
          },
        });

        // Return the data in the required format
        return {
          intake: intake.name, // Use the name of the intake
          total,
          completed,
        };
      })
    );

    // Return the chart data
    return chartData;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    throw new Error("Failed to fetch chart data");
  }
};

export { getDashboardData, getChartData };
