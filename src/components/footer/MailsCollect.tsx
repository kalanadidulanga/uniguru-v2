"use client";
import toast from "react-hot-toast";
import { Input } from "../ui/input";
import { useState } from "react";
import { addMail } from "@/actions/mails";

const MailsCollect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    try {
      setIsLoading(true);
      const res = await addMail(email as string);
      if (res) {
        toast.success("Email added successfully");
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" flex gap-2 lg:justify-end">
      <Input
        className=" max-w-72"
        type="email"
        name="email"
        placeholder="Email"
      />
      <button
        type="submit"
        className=" text-white bg-[#0F172A] px-4 py-2 rounded-lg hover:bg-[#1E293B]"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default MailsCollect;
