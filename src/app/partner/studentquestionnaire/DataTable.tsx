"use client";

import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTable = ({ data, isLoading, reloadStudentQuestionnaire }: any) => {
  return (
    <div className="rounded-md border-2 overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow className=" bg-gray-100 text-xs ">
            <TableHead className=" font-semibold text-black">Id</TableHead>
            <TableHead className="text-black font-semibold">Name</TableHead>
            {/* <TableHead className="text-black font-semibold">Email</TableHead> */}
            <TableHead className="text-black font-semibold">Mobile</TableHead>
            <TableHead className="text-black font-semibold">Intake</TableHead>
            <TableHead className="text-black font-semibold">
              Agent Code
            </TableHead>
            <TableHead className="text-black font-semibold">Country</TableHead>
            <TableHead className="text-black font-semibold">Date</TableHead>
            <TableHead className="text-black font-semibold text-end">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" text-xs">
          {isLoading && (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                <AnimatedSVG className=" self-center w-32 my-5 mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {data?.map((row: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{row?.id}</TableCell>
              <TableCell>{row?.name}</TableCell>
              {/* <TableCell>{row?.email}</TableCell> */}

              <TableCell>{row?.mobile}</TableCell>
              <TableCell>{row?.intake?.name}</TableCell>
              <TableCell>{row?.agentcode || "-"}</TableCell>
              <TableCell>{row?.country || "-"}</TableCell>
              <TableCell>
                {row?.createdAt
                  ? new Date(row.createdAt).toLocaleString()
                  : "No date available"}
              </TableCell>
              <TableCell className="text-end space-x-2 space-y-2">
                {row?.status || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
