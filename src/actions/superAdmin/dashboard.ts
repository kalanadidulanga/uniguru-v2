"use server";

import prisma from "@/lib/clients";

// getDashboardData function without agentcode or intakeId filtering
const getDashboardData = async (intakeId?: any) => {
  try {
    // Step 1: Fetch total count of all questionnaires, optionally filtered by intakeId
    const totalQuestionnairesCount = await prisma.studentQuestionnaires.count({
      where: {
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
    });

    // Step 2: Fetch questionnaires status counts, optionally filtered by intakeId
    const questionnaires = await prisma.studentQuestionnaires.groupBy({
      by: ["status"],
      where: {
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
      _count: true,
    });

    // Step 3: Fetch total count of all students, optionally filtered by intakeId
    const totalStudentsCount = await prisma.students.count({
      where: {
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
    });

    // Step 4: Fetch students status counts, optionally filtered by intakeId
    const students = await prisma.students.groupBy({
      by: ["status"],
      where: {
        ...(intakeId && { intakeId: parseInt(intakeId) }), // Apply intakeId if provided
      },
      _count: true,
    });

    const totalPartnersCount = await prisma.partners.count();

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

    const partnerData = {
      total: totalPartnersCount,
    };

    // Return the organized data
    return {
      questionnaires: questionnaireData,
      students: studentData,
      partners: partnerData,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw new Error("Failed to fetch dashboard data");
  }
};

const getChartData = async () => {
  try {
    // Step 1: Get active intakes
    const activeIntakes = await prisma.intake.findMany({
      where: { status: "Active" }, // Only fetch active intakes
      select: { id: true, name: true }, // Select intake id and name
    });

    // Step 2: Loop through active intakes and count students
    const chartData = await Promise.all(
      activeIntakes.map(async (intake) => {
        // Total students for this intake
        const total = await prisma.students.count({
          where: {
            intakeId: intake.id,
          },
        });

        // Completed students for this intake
        const completed = await prisma.students.count({
          where: {
            intakeId: intake.id,
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
