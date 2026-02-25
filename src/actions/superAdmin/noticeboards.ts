"use server";

import prisma from "@/lib/clients";

const updateNoticeBoard = async (data: any) => {
  try {
    return await prisma.notices.update({
      where: {
        id: data.id,
      },
      data: {
        Notice: data.Notice,
        dataTime: data.dataTime,
      },
    });
  } catch (error) {
    throw error;
  }
};

const loadNotice = async () => {
  try {
    return await prisma.notices.findFirst({
      where: {
        id: 1,
      },
    });
  } catch (error) {
    throw new Error("Failed to load notice");
  }
};

export { updateNoticeBoard, loadNotice };
