"use client";

import { Button } from "@/components/myComponents/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { use, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { z, ZodError } from "zod";
import toast from "react-hot-toast";
import {
  addPartnerAction,
  deletePartnerAndUser,
  editPartnerAction,
  getPartners,
} from "@/actions/superAdmin/partners";
import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DotIcon, Edit, Ellipsis, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { toggleBlockUser } from "@/actions/usersCreateActions";

// Define a schema for the form data
const formSchema = z.object({
  displayName: z.string().min(1, "Display Name is required"),
  nic: z.string().min(1, "NIC is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
  fullName: z.string().min(1, "Full Name is required"),
  partnerCode: z.string().min(1, "Partner Code is required"),
  mobile: z.string().min(10, "Mobile is required"),
});

const formSchema2 = z.object({
  displayName: z.string().min(1, "Display Name is required"),
  nic: z.string().min(1, "NIC is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .union([
      z.string().min(4, "Password must be at least 4 characters long"), // Required with min length
      z.literal(""), // Allow empty string (optional)
    ])
    .optional(),
  fullName: z.string().min(1, "Full Name is required"),
  partnerCode: z.string().min(1, "Partner Code is required"),
  mobile: z.string().min(10, "Mobile is required"),
  id: z.string(),
  userId: z.string(),
});

const Partners = () => {
  const [partners, setPartners] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery); // State for debounced search query
  const debounceDelay = 500; // Delay in milliseconds for debouncing

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  // Define loadPartners function outside of useEffect to be reusable
  const loadPartners = async () => {
    setIsLoading(true);
    try {
      const partners = await getPartners(debouncedQuery);
      console.log(partners);
      setPartners(partners);
    } catch (error) {
      console.error("Error loading partners:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadPartners(); // Fetch partners on initial render
  }, [debouncedQuery]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery); // Update debounced query after the specified delay
    }, debounceDelay);

    return () => {
      clearTimeout(handler); // Clear the timeout if the user types within the delay period
    };
  }, [searchQuery]);

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Partners</h5>
        <div className=" flex items-center gap-3 w-full justify-end">
          <AddPartner reloadPartners={loadPartners} />
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
          data={partners}
          isLoading={isLoading}
          reloadPartners={loadPartners}
        />
      </div>
    </div>
  );
};

function DataTable({ data, isLoading, reloadPartners }: any) {
  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true, // Show loader while confirming
      preConfirm: async () => {
        try {
          const res = await deletePartnerAndUser(id);
          if (!res) {
            return Swal.showValidationMessage("Failed to delete partner.");
          }
          return res;
        } catch (error) {
          return Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
    });

    if (result.isConfirmed && result.value) {
      toast.success("Partner deleted successfully.");
      reloadPartners(); // Reload the partners after deletion
    }
  };

  const handleBlockUser = async (id: number) => {
    // Handle block user logic here
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      showLoaderOnConfirm: true, // Show loader while confirming
      preConfirm: async () => {
        try {
          const res = await toggleBlockUser(id);
          if (!res) {
            return Swal.showValidationMessage("Failed to block partner.");
          }
          return res;
        } catch (error) {
          return Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
    });

    if (result.isConfirmed && result.value) {
      toast.success("Partner blocked successfully.");
      reloadPartners(); // Reload the partners after deletion
    }
  };

  return (
    <div className="rounded-md border-2 overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow className=" bg-gray-100 text-sm ">
            <TableHead className=" font-semibold text-black">Id</TableHead>
            <TableHead className="text-black font-semibold">userId</TableHead>
            <TableHead className="text-black font-semibold">
              Full Name
            </TableHead>
            <TableHead className="text-black font-semibold">Mobile</TableHead>
            <TableHead className="text-black font-semibold">Email</TableHead>
            <TableHead className="text-black font-semibold">NIC</TableHead>
            <TableHead className="text-black font-semibold">
              partnerCode
            </TableHead>
            <TableHead className="text-black font-semibold text-end">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                <AnimatedSVG className=" self-center w-32 my-5 mx-auto" />
              </TableCell>
            </TableRow>
          )}
          {data?.map((row: any, index: any) => (
            <TableRow
              key={index}
              // data-state={row.getIsSelected() && "selected"}
            >
              <TableCell>
                {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                {row?.id}
              </TableCell>
              <TableCell>
                {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                {row?.user?.id}
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {row?.user?.isBlock && (
                    <span className="bg-red-500 h-2 w-2 p-1 flex rounded-full mr-2"></span>
                  )}
                  {row?.fullName}
                </div>
              </TableCell>

              <TableCell>{row?.mobile}</TableCell>
              <TableCell>{row?.user?.email}</TableCell>
              <TableCell>{row?.nic}</TableCell>
              <TableCell>{row?.partnerCode}</TableCell>
              <TableCell className="text-end space-x-2 space-y-2">
                <EditUser data={row} reloadPartners={reloadPartners} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size={"icon"}>
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => handleDelete(row?.user?.id)}
                      className="text-red-500"
                    >
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleBlockUser(row?.user?.id)}
                    >
                      {row?.user?.isBlock ? "Unblock" : "Block"}
                    </DropdownMenuItem>
                    {/* <DropdownMenuSeparator /> */}
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

const EditUser = ({ data, reloadPartners }: any) => {
  const formRef = useRef<HTMLFormElement | null>(null); // Reference for the form
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      // Validate the data using the Zod schema
      const validatedData = formSchema2.parse(dataObj);

      // Call the addPartnerAction with validated data
      await editPartnerAction(validatedData);

      // Reset the form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }

      toast.success("Partner added successfully!");
      reloadPartners();
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
      <DialogContent className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogTitle>Edit Partner</DialogTitle>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1 flex-col mt-3"
          ref={formRef} // Attach ref to the form element
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex flex-col gap-2">
              <Label htmlFor="userId">userId</Label>
              <Input
                type="text"
                name="userId"
                placeholder="userId"
                className="w-full"
                value={data?.user?.id}
                // disabled={true}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="id">id</Label>
              <Input
                type="text"
                name="id"
                placeholder="id"
                className="w-full"
                value={data?.id}
                // disabled={true}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                type="text"
                name="displayName"
                placeholder="Display Name"
                className="w-full"
                defaultValue={data?.user?.name}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="nic">NIC</Label>
              <Input
                type="text"
                name="nic"
                placeholder="NIC"
                className="w-full"
                defaultValue={data?.nic}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full"
                defaultValue={data?.user?.email}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                type="text"
                name="password"
                placeholder="Password"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full"
                defaultValue={data?.fullName}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="partnerCode">Partner Code</Label>
              <Input
                type="text"
                name="partnerCode"
                placeholder="Partner Code"
                className="w-full"
                defaultValue={data?.partnerCode}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="w-full"
                defaultValue={data?.mobile}
              />
            </div>
          </div>
          <Button
            type="submit"
            size={"sm"}
            className="mt-3 ms-auto px-8"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const AddPartner = ({ reloadPartners }: any) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      // Validate the data using the Zod schema
      const validatedData = formSchema.parse(dataObj);

      // Call the addPartnerAction with validated data
      await addPartnerAction(validatedData);

      // Reload partners after successfully adding one
      await reloadPartners(); // <-- Ensure it's called after successful addition

      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
      }

      toast.success("Partner added successfully!");
    } catch (error: any) {
      if (error instanceof ZodError) {
        toast.error("Validation error");
      } else {
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
          New Partner
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Add new partner</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1 flex-col mt-3"
          ref={formRef} // Attach ref to the form element
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex flex-col gap-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                type="text"
                name="displayName"
                placeholder="Display Name"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="nic">NIC</Label>
              <Input
                type="text"
                name="nic"
                placeholder="NIC"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="text"
                name="password"
                placeholder="Password"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="partnerCode">Partner Code</Label>
              <Input
                type="text"
                name="partnerCode"
                placeholder="Partner Code"
                className="w-full"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="w-full"
              />
            </div>
          </div>
          <Button
            type="submit"
            size={"sm"}
            className="mt-3 ms-auto px-8"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Partners;
