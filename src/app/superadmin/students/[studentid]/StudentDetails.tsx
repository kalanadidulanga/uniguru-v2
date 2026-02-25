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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import {
  createStudentAccount,
  deleteStudent,
  updateStudent,
  updateStudentAccount,
} from "@/actions/superAdmin/students";
import { set } from "date-fns";
import Swal from "sweetalert2";
import { toggleBlockUser } from "@/actions/usersCreateActions";
import { useRouter } from "next/navigation";

const StudentDetails = ({ student, reload, isLoading }: any) => {
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

  const handleSave = async () => {
    console.log(studentDetails);

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
            const res = await updateStudent(studentDetails);
            if (!res) {
              return Swal.showValidationMessage("Failed to save student.");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("Student updated successfully.");
        reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
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
            const res = await deleteStudent(
              studentDetails.id,
              studentDetails.userId
            );
            if (!res) {
              return Swal.showValidationMessage("Failed to delete student.");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("Student deleted successfully.");
        router.push("/superadmin/students");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleBlock = async (id: number) => {
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
            const res = await toggleBlockUser(id);
            if (!res) {
              return Swal.showValidationMessage(
                "Failed to Block or Unblock User."
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
        toast.success("User blocked or unblocked successfully.");
        reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-1 flex-col mt-8 gap-5">
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Student name"
            className="w-full"
            value={studentDetails?.name}
            onChange={(e) => {
              setStudentDetails((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
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
            onChange={(e) => {
              setStudentDetails((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
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
            onChange={(e) => {
              setStudentDetails((prev) => ({
                ...prev,
                mobile: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="agentcode">Agent code</Label>
          <Input
            type="text"
            name="agentcode"
            placeholder="Agentcode"
            className="w-full"
            disabled={true}
            value={studentDetails?.agentcode}
            onChange={(e) => {
              setStudentDetails((prev) => ({
                ...prev,
                agentcode: e.target.value,
              }));
            }}
          />
        </div>
      </div>

      <Separator className="" />

      <div className="grid grid-cols-3 gap-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="consultationDone"
            checked={studentDetails.consultationDone}
            onCheckedChange={(checked) => {
              setStudentDetails((prev) => ({
                ...prev,
                consultationDone: checked,
              }));
            }}
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
            onCheckedChange={(checked) => {
              setStudentDetails((prev) => ({
                ...prev,
                cvSOPAssitance: checked,
              }));
            }}
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
            onCheckedChange={(checked) => {
              setStudentDetails((prev) => ({
                ...prev,
                feedbackReportSent: checked,
              }));
            }}
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

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-3">
          <Label htmlFor="intake">Student Intake</Label>
          <RadioGroup
            onValueChange={(value) => {
              setStudentDetails((prev) => ({
                ...prev,
                intakeId: value,
              }));
            }}
            value={studentDetails.intakeId}
            className="flex flex-col space-y-1"
          >
            {intakes.map((intake: any) => (
              <div key={intake.id} className="flex items-center space-x-2">
                <RadioGroupItem id={`intake-${intake.id}`} value={intake.id} />
                <Label htmlFor={`intake-${intake.id}`} className="font-normal">
                  {intake.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <Separator className="" />

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-3 col-span-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            rows={5}
            value={studentDetails.notes}
            onChange={(e) => {
              setStudentDetails((prev) => ({
                ...prev,
                notes: e.target.value,
              }));
            }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="status">Status</Label>
          <Select
            value={studentDetails.status}
            onValueChange={(value) => {
              setStudentDetails((prev) => ({
                ...prev,
                status: value,
              }));
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Student Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"Pending"}>Pending</SelectItem>
              <SelectItem value={"Positive"}>Positive</SelectItem>
              <SelectItem value={"Rejected"}>Rejected</SelectItem>
              <SelectItem value={"Completed"}>Completed</SelectItem>
              <SelectItem value={"Completed & Paid for Partner"}>
                Completed & Paid for Partner
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-5">
        <Button
          variant="blue2"
          size="sm"
          className="px-8"
          disabled={isLoading}
          onClick={() => {
            handleSave();
          }}
        >
          Save
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="px-8"
          disabled={isLoading}
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </Button>
        {!isLoading && (
          <>
            {student?.userId ? (
              <>
                <UpdateStudentAccount data={studentDetails} reload={reload} />
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-8"
                  disabled={isLoading}
                  onClick={() => {
                    toggleBlock(studentDetails.userId);
                  }}
                >
                  {student?.user?.isBlock ? "Unblock" : "Block"}
                </Button>
              </>
            ) : (
              <CreateAccountForStudent data={studentDetails} reload={reload} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const CreateAccountForStudent = ({ data, reload }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    id: data?.id || "",
    name: "",
    email: data?.email || "", // Ensure email initializes correctly
    password: "",
  });

  useEffect(() => {
    setUser((prev) => ({
      ...prev,
      email: data?.email || "",
      id: data?.id || "",
    }));
  }, [data]);

  const handleSubmit = async () => {
    // Validate that all fields are filled
    if (!user.name.trim() || !user.email.trim() || !user.password.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setIsLoading(true);
      const res = await createStudentAccount(user);
      if (res) {
        toast.success("Account created successfully");
        reload();
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="px-8"
          disabled={isLoading}
        >
          Create Student Account
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Create Student Account</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-5 mb-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Short Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Student short name"
              className="w-full"
              value={user.name}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full"
              value={user.password}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Creating..." : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const UpdateStudentAccount = ({ data, reload }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    id: data?.id || "",
    userId: data?.userId || "",
    name: data.displayName,
    email: data?.email || "", // Ensure email initializes correctly
    password: "",
  });

  useEffect(() => {
    setUser((prev) => ({
      ...prev,
      email: data?.email || "",
      id: data?.id || "",
      name: data.displayName,
      userId: data?.userId || "",
    }));
  }, [data]);

  const handleSubmit = async () => {
    // Validate that all fields are filled
    if (!user.name.trim() || !user.email.trim() || !user.password.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setIsLoading(true);
      const res = await updateStudentAccount(user);
      if (res) {
        toast.success("Account updated successfully");
        reload();
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="px-8"
          disabled={isLoading}
        >
          Update Student Account
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Update Student Account</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-5 mb-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Short Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Student short name"
              className="w-full"
              value={user.name}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full"
              value={user.password}
              onChange={(e) => {
                setUser((prev) => ({ ...prev, password: e.target.value }));
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetails;
