"use client";
import { getIntakesForClient } from "@/actions/superAdmin/intakes";
import { getPartnerCodes } from "@/actions/superAdmin/partners";
import { Button } from "@/components/myComponents/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Disable server-side rendering for this component
});
import "react-quill/dist/quill.snow.css";
import { sendNewMessageFromStudent } from "@/actions/mailSending";

const StudentDetails = ({ student, reload, isLoading }: any) => {
  const [value, setValue] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [studentDetails, setStudentDetails] = useState({
    id: student?.id,
    userId: student?.userId,
    displayName: student?.user?.name,
    name: student?.name || "",
    email: student?.email || "",
    agentcode: student?.agentcode || "",
    consultationDone: student?.consultationDone || false,
    cvSOPAssitance: student?.cvSOPAssitance || false,
    feedbackReportSent: student?.feedbackReportSent || false,
    intakeId: student?.intakeId || "",
    mobile: student?.mobile || "",
    status: student?.status || "",
    notes: student?.notes || "",
  });
  const [intakes, setIntakes] = useState<any>([]);
  const [partnerCodes, setPartnerCodes] = useState<any>([]);

  useEffect(() => {
    setStudentDetails({
      id: student?.id,
      userId: student?.userId,
      displayName: student?.user?.name || "",
      name: student?.name || "",
      email: student?.email || "",
      agentcode: student?.agentcode || "",
      consultationDone: student?.consultationDone || false,
      cvSOPAssitance: student?.cvSOPAssitance || false,
      feedbackReportSent: student?.feedbackReportSent || false,
      intakeId: student?.intakeId || "",
      mobile: student?.mobile || "",
      status: student?.status || "",
      notes: student?.notes || "",
    });
  }, [student]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res2 = await getIntakesForClient();
        if (res2) {
          setIntakes(res2);
        }
      } catch (error) {}
    };

    loadData();
  }, []);

  const handleSendMail = async () => {
    if (!value || value.length < 10) {
      toast.error("Please enter a valid message");
      return;
    }

    console.log(value);

    try {
      setLoading(true);
      const res = await sendNewMessageFromStudent({
        message: value,
        email: studentDetails.email,
        mobile: studentDetails.mobile,
        name: studentDetails.name,
      });
      if (res.status) {
        toast.success("Message sent successfully");
        setValue("");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col mt-8 gap-5">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex flex-col gap-3 lg:col-span-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            rows={5}
            value={studentDetails.notes || "No notes for you"}
            readOnly
          />
        </div>
      </div> */}

      {/* <Separator className="" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Student name"
            className="w-full"
            value={studentDetails?.name}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Student email"
            className="w-full"
            value={studentDetails?.email}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="mobile">Mobile</Label>
          <Input
            type="text"
            name="mobile"
            placeholder="Student mobile"
            className="w-full"
            value={studentDetails?.mobile}
            readOnly
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <Label htmlFor="agentcode">Agent code</Label>
          <Input
            type="text"
            name="agentcode"
            placeholder="Agentcode"
            className="w-full"
            // disabled={true}
            value={studentDetails?.agentcode}
            readOnly
          />
        </div> */}

        <div className="flex flex-col gap-2">
          <Label htmlFor="intake">Intake</Label>
          <Input
            type="text"
            name="intake"
            placeholder="Intake"
            className="w-full"
            // disabled={true}
            value={student?.intake?.name}
            readOnly
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <Label htmlFor="status">Status</Label>
          <Input
            type="text"
            name="status"
            placeholder="status"
            className="w-full"
            // disabled={true}
            value={student?.status}
            readOnly
          />
        </div> */}
      </div>

      <Separator className="" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="consultationDone"
            checked={studentDetails.consultationDone}
          />
          <Label
            htmlFor="consultationDone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Consultation Done
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="cvSOPAssitance"
            checked={studentDetails.cvSOPAssitance}
          />
          <Label
            htmlFor="cvSOPAssitance"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            CV, SOP Assitance
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="feedbackReportSent"
            checked={studentDetails.feedbackReportSent}
          />
          <Label
            htmlFor="feedbackReportSent"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Feedback Report
          </Label>
        </div>
      </div>

      <Separator className="" />

      <div className="flex flex-col gap-3">
        <Textarea
          className=" max-w-xl"
          placeholder="Enter message"
          rows={7}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className=" flex items-center gap-8">
          <Button
            className=" px-8"
            size={"sm"}
            variant={"blue2"}
            onClick={handleSendMail}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send mail"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
