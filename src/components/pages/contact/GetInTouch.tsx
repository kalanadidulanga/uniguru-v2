"use client"; // Ensures this is a Client Component

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/myComponents/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/actions/mailSending"; // Import server action

const GetInTouch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Use ref to keep a reference to the form

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await sendContactEmail(formData);
      if (response.status) {
        toast.success(response.message); // Show success notification

        // Reset the form only if the status is true
        formRef.current?.reset();
      } else {
        toast.error(response.message); // Show error message
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false); // Set loading to false after submission
    }
  };

  return (
    <div className="pb-24 pt-8 md:py-24 flex flex-col" id="get-in-touch">
      <h3 className="text-3xl font-bold text-my-blue">
        Get in <span className="text-my-orange">Touch</span>
      </h3>
      <form
        ref={formRef}
        className="mt-10 flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <Input placeholder="Name" type="text" name="name" required />
        <Input placeholder="Subject" type="text" name="subject" required />
        <Input placeholder="Email" type="email" name="email" required />
        <Input placeholder="Mobile" type="tel" name="mobile" required />
        <Textarea placeholder="Message" rows={5} name="message" required />
        <Button type="submit" variant={"blue2"} disabled={isLoading}>
          {isLoading ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default GetInTouch;
