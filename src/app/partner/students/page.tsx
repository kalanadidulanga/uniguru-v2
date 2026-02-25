"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import PaginationControls from "@/components/myComponents/PaginationControl";
import { getStudentsByPartnerCode } from "@/actions/partner/student";
import DataTable from "./DataTable";

const Students = () => {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [students, setStudents] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  const loadStudents = async (page = 1) => {
    setIsLoading(true);

    try {
      if (status === "authenticated" && session.user?.id) {
        const { data, totalCount } = await getStudentsByPartnerCode(
          session?.user?.id,
          page,
          itemsPerPage
        );
        setStudents(data);
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
        console.log(data);
      }
    } catch (error) {
      console.error("Error loading students:", error);
      toast.error("Error loading students");
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
    loadStudents(page);
  }, [searchParams]);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Students</h5>
      </div>
      <div className="w-full h-auto my-5">
        <DataTable
          data={students}
          isLoading={isLoading}
          reload={() => loadStudents(currentPage)}
        />

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          createPageURL={createPageURL}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default Students;
