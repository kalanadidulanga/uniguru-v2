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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/myComponents/button";
import {
  Check,
  CircleFadingPlusIcon,
  Edit,
  Ellipsis,
  GraduationCap,
  Notebook,
  NotepadText,
  Text,
  TrendingUp,
  View,
  X,
} from "lucide-react";
import Swal from "sweetalert2";
import {
  deleteQuestionnaire,
  rejectQuestionnaire,
} from "@/actions/studentquestionnaire";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { addStudentAction } from "@/actions/superAdmin/students";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

const DataTable = ({ data, isLoading, reload }: any) => {
  return (
    <div className="rounded-md border-2 overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow className=" bg-gray-100 text-xs ">
            <TableHead className=" font-semibold text-black">Id</TableHead>
            <TableHead className="text-black font-semibold">Name</TableHead>
            <TableHead className="text-black font-semibold">Mobile</TableHead>
            <TableHead className="text-black font-semibold">Intake</TableHead>
            <TableHead className="text-black font-semibold text-center">
              Consultation Done
            </TableHead>
            <TableHead className="text-black font-semibold text-center">
              CV, SOP Assitance
            </TableHead>
            <TableHead className="text-black font-semibold text-center">
              User
            </TableHead>
            <TableHead className="text-black font-semibold">Date</TableHead>
            <TableHead className="text-black font-semibold">Status</TableHead>
            <TableHead className="text-black font-semibold text-end">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" text-xs">
          {isLoading && (
            <TableRow>
              <TableCell colSpan={10} className="text-center">
                <AnimatedSVG className=" self-center w-32 my-5 mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {data?.map((row: any, index: any) => {
            // Calculate the number of true documents in the studentDocuments object
            const trueDocumentCount = Object.values(
              row?.studentDocuments || {}
            ).filter((value) => value === true).length;

            return (
              <TableRow key={index}>
                <TableCell>{row?.id}</TableCell>
                <TableCell>{row?.name}</TableCell>
                <TableCell>{row?.mobile}</TableCell>
                <TableCell>{row?.intake?.name}</TableCell>
                <TableCell className="text-center">
                  {row?.consultationDone ? (
                    <Check className="text-green-500 mx-auto" />
                  ) : (
                    <X className="text-red-500 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {row?.cvSOPAssitance ? (
                    <Check className="text-green-500 mx-auto" />
                  ) : (
                    <X className="text-red-500 mx-auto" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {row?.user ? (
                    <Check className="text-green-500 mx-auto" />
                  ) : (
                    <X className="text-red-500 mx-auto" />
                  )}
                </TableCell>
                <TableCell>
                  {row?.createdAt
                    ? new Date(row.createdAt).toLocaleString("en-US")
                    : "No date available"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">{row?.status}</div>
                </TableCell>
                <TableCell className="text-end space-x-2 space-y-2">
                  <ViewNotes data={row} />
                  <ViewUniversities data={row?.studentUniversities} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;

const ViewNotes = ({ data }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <NotepadText />
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-xl">
        <DialogHeader>
          <DialogTitle>Notes</DialogTitle>
        </DialogHeader>
        <div className=" w-auto h-auto">
          <Textarea rows={7} value={data?.notes || ""} readOnly />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ViewUniversities = ({ data }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <GraduationCap />
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-6xl">
        <DialogHeader>
          <DialogTitle>Student Universities</DialogTitle>
        </DialogHeader>
        <div className=" w-auto h-auto border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className=" bg-gray-100 text-xs ">
                <TableHead className=" font-semibold text-black">Id</TableHead>
                <TableHead className="text-black font-semibold">
                  University
                </TableHead>
                <TableHead className="text-black font-semibold">
                  Country
                </TableHead>
                <TableHead className=" font-semibold text-black">
                  Course Name
                </TableHead>
                <TableHead className=" font-semibold text-black">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" text-xs">
              {data.length > 0 &&
                data?.map((row: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell>{row?.id}</TableCell>
                    <TableCell>{row?.university?.name}</TableCell>
                    <TableCell>{row?.country}</TableCell>
                    <TableCell>{row?.courseName}</TableCell>
                    <TableCell>{row?.currentStatus?.label}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
