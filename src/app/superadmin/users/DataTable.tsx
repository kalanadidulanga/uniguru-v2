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
import { Ellipsis, View } from "lucide-react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { deleteUser } from "@/actions/superAdmin/userManagement";
import { toggleBlockUser } from "@/actions/usersCreateActions";

const DataTable = ({ data, isLoading, reload }: any) => {
  const handleDelete = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#545AE8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        showLoaderOnConfirm: true, // Show loader while confirming
        preConfirm: async () => {
          try {
            const res = await deleteUser(id);
            if (!res) {
              return Swal.showValidationMessage("Failed to delete User.");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("User deleted successfully.");
        reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleBlock = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#545AE8",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        showLoaderOnConfirm: true, // Show loader while confirming
        preConfirm: async () => {
          try {
            const res = await toggleBlockUser(id);
            if (!res) {
              return Swal.showValidationMessage(
                "Failed to Block or Unblock User."
              );
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("User blocked or unblocked successfully.");
        reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-md border-2 overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow className=" bg-gray-100 text-xs ">
            <TableHead className=" font-semibold text-black">Id</TableHead>
            <TableHead className="text-black font-semibold">Name</TableHead>
            <TableHead className="text-black font-semibold">Email</TableHead>
            <TableHead className="text-black font-semibold">Role</TableHead>
            <TableHead className="text-black font-semibold text-end">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" text-xs">
          {isLoading && (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                <AnimatedSVG className=" self-center w-32 my-5 mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {data?.map((row: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{row?.id}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {row?.isBlock && (
                    <span className="bg-red-500 h-2 w-2 p-1 flex rounded-full mr-2"></span>
                  )}
                  {row?.name}
                </div>
              </TableCell>
              <TableCell className=" text-nowrap">{row?.email}</TableCell>

              <TableCell>{row?.role}</TableCell>
              <TableCell className="text-end space-x-2 space-y-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size={"icon"}>
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      className=" text-red-500"
                      onClick={() => handleDelete(row?.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toggleBlock(row?.id)}>
                      {row?.isBlock ? "Unblock" : "Block"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
