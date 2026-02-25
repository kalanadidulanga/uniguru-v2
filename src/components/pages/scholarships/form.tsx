"use client";

import { sendScholarshipEnquiryEmail } from "@/actions/mailSending";
import { Button } from "@/components/myComponents/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { STUDY_DESTINATIONS } from "@/constants/data";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const ScholarshipsForm = ({ country }: { country: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Use ref to keep a reference to the form
  const [destination, setDestination] = useState<string | null>(country);

  // Handle form submit
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const dataSet = {
      destination,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      mobile: formData.get("mobile") as string,
      name: formData.get("name") as string,
    };
    if (
      !dataSet.destination ||
      !dataSet.email ||
      !dataSet.message ||
      !dataSet.mobile ||
      !dataSet.name
    ) {
      toast.error("Please fill all the required fields.");
      setIsLoading(false);
      return;
    }

    // console.log("Form Data Submitted:", dataSet);

    try {
      const response = await sendScholarshipEnquiryEmail(dataSet);
      if (response.status) {
        toast.success(response.message);
        formRef.current?.reset();
        setDestination(null);
      } else {
        toast.error(response.message); // Show error message
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={submitForm}
      className=" w-full h-auto flex flex-col gap-10"
    >
      <h3 className=" text-4xl font-bold text-my-blue text-center">
        Scholarships
      </h3>

      <div className=" w-full h-auto gap-5 flex flex-col">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">
            Select Your Dream Study Destination.
          </p>
          <div className=" w-full h-auto grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STUDY_DESTINATIONS.map((item, index) => (
              <div
                key={index}
                className={` border-2 flex flex-col sm:flex-row items-center gap-3 p-2 rounded-lg cursor-pointer border-my-blue ${
                  destination === item.name
                    ? "bg-my-blue text-white"
                    : "text-my-blue"
                }`}
                onClick={() => {
                  setDestination(item.name);
                }}
              >
                <Image src={item.src} alt="" width={30} height={30} />
                <span className="font-semibold text-sm ">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <Input placeholder="Name" type="text" name="name" required />
        <Input placeholder="Email" type="email" name="email" required />
        <Input placeholder="Mobile" type="tel" name="mobile" required />
        <Textarea placeholder="Message" rows={5} name="message" required />
      </div>

      <Button type="submit" variant={"blue"} className="" disabled={isLoading}>
        {isLoading ? "Sending..." : "Enquire Now"}
      </Button>
    </form>
  );
};

export default ScholarshipsForm;
