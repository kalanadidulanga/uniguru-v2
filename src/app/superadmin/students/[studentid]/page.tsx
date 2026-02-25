"use client";
import { Button } from "@/components/myComponents/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";
import { getStudentById } from "@/actions/superAdmin/students";
import StudentDetails from "./StudentDetails";
import StudentDocument from "./StudentDocument";
import StudentUniversities from "./StudentUniversities";

const StudentEdit = ({ params }: any) => {
  const { studentid } = params;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [student, setStudent] = useState<any>({});

  const loadStudent = async () => {
    setIsLoading(true);
    try {
      const student = await getStudentById(parseInt(studentid));
      if (student) {
        console.log(student);
        setStudent(student);
      }
    } catch (error: any) {
      console.error("Error loading student:", error); // Log the error
      toast.error(error.message || "Failed to load student.");
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadStudent();
  }, []);

  return (
    <div className="flex flex-1 flex-col p-2">
      <div className="flex items-center gap-3">
        <Button
          size={"icon"}
          variant={"outline"}
          className=" w-8 h-8 p-1 cursor-pointer"
          onClick={() => {
            router.back();
          }}
          asChild
        >
          <ChevronLeft size={16} />
        </Button>
        <h5 className="text-lg font-semibold">Back</h5>
      </div>
      <div className="flex flex-1 flex-col p-5 bg-white mt-3 rounded-md border">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-semibold">
            Edit Student | {student?.name}
          </h5>
        </div>
        <div className=" w-full h-auto mt-5">
          <Tabs defaultValue="details" className="w-full h-auto">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="universities">Universities</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <StudentDetails
                student={student}
                reload={loadStudent}
                isLoading={isLoading}
              />
            </TabsContent>
            <TabsContent value="documents">
              <StudentDocument studentid={studentid} />
            </TabsContent>
            <TabsContent value="universities">
              <StudentUniversities studentid={studentid} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StudentEdit;
