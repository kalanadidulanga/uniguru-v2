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
import { deleteUniversity } from "@/actions/superAdmin/univercitiesList";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { deleteAccommodation } from "@/actions/superAdmin/accommodation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

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
            const res = await deleteAccommodation(id);
            if (!res) {
              return Swal.showValidationMessage(
                "Failed to delete Accommodation."
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
        toast.success("Accommodation deleted successfully.");
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
            <TableHead className="text-black font-semibold">Country</TableHead>
            <TableHead className="text-black font-semibold">src</TableHead>
            <TableHead className="text-black font-semibold">
              Destination
            </TableHead>
            <TableHead className="text-black font-semibold">Location</TableHead>
            <TableHead className="text-black font-semibold">Price</TableHead>
            <TableHead className="text-black font-semibold text-end">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" text-xs">
          {isLoading && (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                <AnimatedSVG className=" self-center w-32 my-5 mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {data?.map((row: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{row?.id}</TableCell>
              <TableCell className=" text-nowrap">{row?.name}</TableCell>
              <TableCell>{row?.destination?.name}</TableCell>

              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size={"icon"}>
                      <View />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className=" max-w-md overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Image</DialogTitle>
                    </DialogHeader>
                    <div className=" w-full h-full">
                      <Image
                        src={row?.src}
                        alt={row?.name}
                        width={300}
                        height={300}
                        className=" w-full h-full object-cover"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>{row?.desc}</TableCell>
              <TableCell>{row?.location}</TableCell>
              <TableCell>{row?.price}</TableCell>
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
