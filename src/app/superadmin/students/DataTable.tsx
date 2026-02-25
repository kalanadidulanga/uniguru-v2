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
import ViewQuestionnaire from "./ViewQuestionnaire";
import Link from "next/link";

const DataTable = ({ data, isLoading, reloadStudentQuestionnaire }: any) => {
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
              Feedback Report
            </TableHead>
            <TableHead className="text-black font-semibold text-center">
              User
            </TableHead>
            <TableHead className="text-black font-semibold">
              Documents
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
              <TableCell colSpan={12} className="text-center">
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
                  {row?.feedbackReportSent ? (
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
                  <div
                    className={`flex items-center font-semibold ${
                      trueDocumentCount == 12 && "text-green-500"
                    }`}
                  >
                    {trueDocumentCount}/12
                  </div>
                </TableCell>
                <TableCell>
                  {row?.createdAt
                    ? new Date(row.createdAt).toLocaleString()
                    : "No date available"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">{row?.status}</div>
                </TableCell>
                <TableCell className="text-end space-x-2 space-y-2">
                  <ViewQuestionnaire
                    dataSet={row}
                    data={row?.StudentQuestionnaireo}
                  />
                  <Button variant={"outline"} size={"icon"} asChild>
                    <Link
                      href={`/superadmin/students/${row?.id}`}
                      as={`/superadmin/students/${row?.id}`}
                    >
                      <Edit />
                    </Link>
                  </Button>
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

const AcceptForm = ({ data, reload }: any) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAccepedOrRejected, setIsAcceptedOrRejected] = useState(
    data?.status === "Pending" ? false : true
  );

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("id", data?.id);
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("mobile", data?.mobile);
    formData.append("intakeId", data?.intake?.id);
    if (data?.agentcode) {
      formData.append("agentcode", data?.agentcode);
    }

    const dataObj = Object.fromEntries(formData.entries());

    if (!dataObj.displayName || !dataObj.password) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }
    console.log(dataObj);

    try {
      const res = await addStudentAction(dataObj);
      if (res) {
        toast.success("Student added successfully");
        setIsAcceptedOrRejected(true);
        if (formRef.current) {
          formRef.current.reset();
        }
        reload();
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return isAccepedOrRejected ? (
    <div className=" text-3xl text-center text-green-500">
      Student added successfully
    </div>
  ) : (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-1 flex-col mt-3 space-y-4"
      ref={formRef}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="displayName">Display Name</Label>
        <Input
          type="text"
          name="displayName"
          placeholder="Your short name"
          className="w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="********"
          className="w-full"
          required
        />
      </div>
      <Button type="submit" className="mt-3 w-full" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};
