"use client";

import { getStudents } from "@/actions/superAdmin/students";
import PaginationControls from "@/components/myComponents/PaginationControl";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Select2 from "react-select";
import { getIntakes } from "@/actions/superAdmin/intakes";
import { STUDENT_STATUS } from "@/constants/studentStatus";

const Students = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [intakes, setIntakes] = useState<any>([]);
  const [selectedIntake, setSelectedIntake] = useState<any>(null);
  const [statuses, setStatuses] = useState<any>([]);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);

  const [students, setStudents] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery); // State for debounced search query
  const itemsPerPage = 10;
  const debounceDelay = 500; // Delay in milliseconds for debouncing

  const loadStudents = async (
    page = 1,
    query = "",
    intakeId = "",
    status = ""
  ) => {
    setIsLoading(true);
    try {
      const { data, totalCount } = await getStudents(
        page,
        itemsPerPage,
        query,
        intakeId,
        status
      );
      console.log(data);

      setStudents(data);
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
    } catch (error) {
      console.error("Error loading questionnaires:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getData = async () => {
    try {
      const res = await getIntakes();
      // console.log(res);

      if (res) {
        setIntakes(
          res.map((item: any) => ({ value: item.id, label: item.name }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
    const intakeId = selectedIntake?.value || "";
    const status = selectedStatus?.value || "";
    loadStudents(page, debouncedQuery, intakeId, status); // Fetch questionnaires on initial render
  }, [searchParams, debouncedQuery, selectedIntake, selectedStatus]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery); // Update debounced query after the specified delay
    }, debounceDelay);

    return () => {
      clearTimeout(handler); // Clear the timeout if the user types within the delay period
    };
  }, [searchQuery]);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Students</h5>
        <div className=" flex items-center gap-3 w-full justify-end">
          <Select2
            placeholder="Intake..."
            options={intakes}
            className=" w-52"
            value={selectedIntake}
            onChange={(e: any) => {
              if (e) {
                setSelectedIntake(e);
              }
            }}
          />
          <Select2
            placeholder="Status..."
            options={STUDENT_STATUS}
            className=" w-52"
            value={selectedStatus}
            onChange={(e: any) => {
              if (e) {
                setSelectedStatus(e);
              }
            }}
          />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className=" w-72"
          />
        </div>
      </div>
      <div className=" w-full h-auto my-5">
        <DataTable
          data={students}
          isLoading={isLoading}
          reloadStudentQuestionnaire={() => {
            loadStudents(currentPage, debouncedQuery);
          }}
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
