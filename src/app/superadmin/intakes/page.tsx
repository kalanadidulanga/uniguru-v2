"use client";

import {
  activeIntake,
  closeIntake,
  deleteIntake,
  getIntakes,
  newIntake,
  updateIntake,
} from "@/actions/superAdmin/intakes";
import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import { Button } from "@/components/myComponents/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Ellipsis } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { any, ZodError } from "zod";

const Intake = () => {
  const [intakes, setIntakes] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define loadPartners function outside of useEffect to be reusable
  const loadIntakes = async () => {
    setIsLoading(true);
    try {
      const intakes = await getIntakes();
      console.log(intakes);
      setIntakes(intakes);
    } catch (error) {
      console.error("Error loading intakes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadIntakes(); // Fetch partners on initial render
  }, []);

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Intakes</h5>
        <AddIntake reloadIntakes={loadIntakes} />
      </div>
      <div className=" w-full h-auto my-5">
        <DataTable
          data={intakes}
          isLoading={isLoading}
          reloadIntakes={loadIntakes}
        />
      </div>
    </div>
  );
};

function DataTable({ data, isLoading, reloadIntakes }: any) {
  const handleCloseIntake = async (id: number) => {
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
            const res = await closeIntake(id);
            if (!res) {
              return Swal.showValidationMessage("Failed to close intake.");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("Intake closed successfully.");
        reloadIntakes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteIntake = async (id: number) => {
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
            const res = await deleteIntake(id);
            if (!res) {
              return Swal.showValidationMessage("Failed to delete intake.");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("Intake deleted successfully.");
        reloadIntakes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleActivateIntake = async (id: number) => {
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
            const res = await activeIntake(id);
            if (!res) {
              return Swal.showValidationMessage("Failed to activate intake.");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("Intake activated successfully.");
        reloadIntakes();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-md border-2 overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow className=" bg-gray-100 text-sm ">
            <TableHead className=" font-semibold text-black">Id</TableHead>
            <TableHead className="text-black font-semibold">Name</TableHead>
            <TableHead className="text-black font-semibold">Status</TableHead>
            <TableHead className="text-black font-semibold text-end">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                <AnimatedSVG className=" self-center w-32 my-5 mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {data?.map((row: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{row?.id}</TableCell>
              <TableCell>{row?.name}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  {row?.status === "Active" ? (
                    <span className="bg-green-500 h-2 w-2 p-1 flex rounded-full mr-2"></span>
                  ) : (
                    <span className="bg-red-500 h-2 w-2 p-1 flex rounded-full mr-2"></span>
                  )}
                  {row?.status}
                </div>
              </TableCell>
              <TableCell className="text-end space-x-2 space-y-2">
                <EditIntake data={row} reloadIntakes={reloadIntakes} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size={"icon"}>
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => handleActivateIntake(row?.id)}
                    >
                      Activate Intake
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleCloseIntake(row?.id)}
                    >
                      Close Intake
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleDeleteIntake(row?.id)}
                      className=" text-red-500"
                    >
                      Delete Intake
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
}

const AddIntake = ({ reloadIntakes }: any) => {
  const formRef = useRef<HTMLFormElement | null>(null); // Reference for the form
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      if (!dataObj.name) {
        throw new Error("Name is required");
      }

      await newIntake(dataObj.name as string);

      // Reset the form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }

      toast.success("Intake added successfully!");
      reloadIntakes();
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.error("Validation failed:", error.errors);
        toast.error("Empty fields or invalid data");
      } else {
        console.error("Unknown error:", error);
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"blue2"} size={"sm"}>
          New Intake
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Add new Intake</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1 flex-col mt-3"
          ref={formRef} // Attach ref to the form element
        >
          <div className=" flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            size={"sm"}
            className="mt-3 ms-auto px-8"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const EditIntake = ({ reloadIntakes, data }: any) => {
  const formRef = useRef<HTMLFormElement | null>(null); // Reference for the form
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      if (!dataObj.name) {
        throw new Error("Name is required");
      }

      await updateIntake(data.id, dataObj.name as string);

      // Reset the form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }

      toast.success("Intake updated successfully!");
      reloadIntakes();
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.error("Validation failed:", error.errors);
        toast.error("Empty fields or invalid data");
      } else {
        console.error("Unknown error:", error);
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Edit Intake</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1 flex-col mt-3"
          ref={formRef} // Attach ref to the form element
        >
          <div className=" flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full"
              defaultValue={data.name}
            />
          </div>
          <Button
            type="submit"
            size={"sm"}
            className="mt-3 ms-auto px-8"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Intake;
