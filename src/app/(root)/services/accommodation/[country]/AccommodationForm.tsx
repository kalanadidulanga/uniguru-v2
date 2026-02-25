"use client";

import {
  sendAccommodationEnquiryEmail,
  sendConsultationEmail,
} from "@/actions/mailSending";
import { Button } from "@/components/myComponents/button";
import { DatePickerWithPresets } from "@/components/myComponents/DatePickerWithPresets";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { STUDY_DESTINATIONS } from "@/constants/data";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const AccommodationForm = ({ country }: { country: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [destination, setDestination] = useState<string | null>(country);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Handle the form data, including the selected date
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

    try {
      const response = await sendAccommodationEnquiryEmail(dataSet);
      if (response.status) {
        toast.success(response.message); // Show success notification
        // Reset the form only if the status is true
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

    // Perform any further actions here (e.g., API call)
  };

  return (
    <div className="my-container my-24 flex items-center justify-center w-full">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col rounded-xl shadow-xl border p-5 gap-5 lg:p-8 w-full bg-slate-50 max-w-xl"
      >
        <p className="font-semibold text-2xl">Accommodation Form</p>

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

        <Button
          variant={"default"}
          className="max-w-xs self-center w-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Confirm"}
        </Button>
      </form>
    </div>
  );
};

export default AccommodationForm;
