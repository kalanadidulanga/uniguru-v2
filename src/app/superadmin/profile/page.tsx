"use client";

import { getProfileDetails } from "@/actions/superAdmin/profile";
import { changePassword } from "@/actions/usersCreateActions";
import { Button } from "@/components/myComponents/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_URL } from "@/constants/siteConfig";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ZodError } from "zod";

const Profile = () => {
  const [data, setData] = useState<any>({});
  const formRef = useRef<HTMLFormElement | null>(null); // Reference for the form
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();

  const loadProfile = async () => {
    setIsLoading(true);
    try {
      if (status === "authenticated" && session.user?.id) {
        const user = await getProfileDetails(parseInt(session?.user?.id, 10));
        console.log(user);
        setData(user);
      } else {
        toast.error("Not authenticated");
      }
    } catch (error) {
      console.error("Error loading User data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadProfile();
  }, []);

  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const oldPassword = formData.get("oldPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill all the required fields");
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 4 || confirmPassword.length < 4) {
      toast.error("Password must be at least 4 characters long");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      // const session = await getSession();
      if (!session || !session.user || !session.user.id) {
        console.error("No valid session found");
        return;
      }
      const res = await changePassword(
        parseInt(data?.id, 10),
        oldPassword,
        newPassword
      );

      if (res) {
        toast.success("Password changed successfully");
        formRef.current?.reset();
      }
    } catch (error: any) {
      console.error("Error loading User data:", error);
      toast.error(error.message || "Failed to change password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between">
          <h5 className="text-xl font-semibold">Profile</h5>
        </div>
        <div className=" w-full h-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Name</span>
            <div className="bg-white px-2 h-10 rounded border flex items-center">
              {data?.name}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Email</span>
            <div className="bg-white px-2 h-10 rounded border flex items-center">
              {data?.email}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Role</span>
            <div className="bg-white px-2 h-10 rounded border flex items-center">
              {data?.role}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between">
          <h5 className="text-xl font-semibold">Change Password</h5>
        </div>
        <div className=" w-full h-auto my-5">
          <form
            ref={formRef}
            onSubmit={handleChangePassword}
            className=" max-w-md"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <Label htmlFor="oldPassword">Old Password</Label>
                <Input
                  id="oldPassword"
                  name="oldPassword"
                  placeholder="Old Password"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <Button className=" mt-5" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Change Password"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
