"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { getQuestionnaires } from "@/actions/studentquestionnaire";
import PaginationControls from "@/components/myComponents/PaginationControl";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Studentquestionnaire = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [questionnaires, setQuestionnaires] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery); // State for debounced search query
  const itemsPerPage = 10;
  const debounceDelay = 500; // Delay in milliseconds for debouncing

  const [status, setStatus] = useState("");

  const loadStudentQuestionnaires = async (
    page = 1,
    query = "",
    status = ""
  ) => {
    setIsLoading(true);
    try {
      const { data, totalCount } = await getQuestionnaires(
        page,
        itemsPerPage,
        query,
        status
      );
      setQuestionnaires(data);
      setTotalPages(Math.ceil(totalCount / itemsPerPage));
    } catch (error) {
      console.error("Error loading questionnaires:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
    loadStudentQuestionnaires(page, debouncedQuery, status); // Fetch questionnaires on initial render
  }, [searchParams, debouncedQuery, status]);

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
        <h5 className="text-xl font-semibold">Students Questionnaires</h5>
        <div className=" flex items-center w-auto gap-3">
          <Select onValueChange={setStatus} value={status}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"Pending"}>Pending</SelectItem>
              <SelectItem value={"Accepted"}>Accepted</SelectItem>
              <SelectItem value={"Rejected"}>Rejected</SelectItem>
              <SelectItem value={"StudentDeleted"}>StudentDeleted</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="Search by name, email, or mobile"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-[300px]"
          />
        </div>
      </div>
      <div className=" w-full h-auto my-5">
        <DataTable
          data={questionnaires}
          isLoading={isLoading}
          reloadStudentQuestionnaire={() => {
            loadStudentQuestionnaires(currentPage, debouncedQuery);
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

export default Studentquestionnaire;
