"use client";

import { addNewUser, getUsers } from "@/actions/superAdmin/userManagement";
import { createUser } from "@/actions/usersCreateActions";
import { Button } from "@/components/myComponents/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import DataTable from "./DataTable";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<any>([]);
  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const users = await getUsers();
      console.log(users);

      if (users) {
        setUsers(users);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">User Management</h5>
        <div className=" flex items-center gap-3">
          <AddUser reload={loadUsers} />
        </div>
      </div>
      <div className=" w-full h-auto my-5">
        <DataTable data={users} isLoading={isLoading} reload={loadUsers} />
      </div>
    </div>
  );
};

const AddUser = ({ reload }: any) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>("");

  const roles = ["admin", "superadmin"];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("role", selectedRole);
    const dataObj = Object.fromEntries(formData.entries());

    if (
      !dataObj.role ||
      !dataObj.email ||
      !dataObj.name ||
      !dataObj.password ||
      !dataObj.confirmPassword
    ) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }

    if (dataObj.password !== dataObj.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const res = await addNewUser(dataObj);
      if (res) {
        reload();
        toast.success("User added successfully");
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="blue2" className="w-auto" size={"sm"}>
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1 flex-col mt-3 space-y-4"
          ref={formRef}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={setSelectedRole} value={selectedRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select a rome" />
              </SelectTrigger>
              <SelectContent>
                {roles?.map((item: any, index: any) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="websiteUrl">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="example@ex.com"
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
          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="********"
              className="w-full"
              required
            />
          </div>
          <Button type="submit" className="mt-3 w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Users;
