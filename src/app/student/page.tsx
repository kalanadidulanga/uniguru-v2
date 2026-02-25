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
import { getStudentByUserId } from "@/actions/student/students";
import { getSession, useSession } from "next-auth/react";

const StudentEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // Inside your component:
  const { data: session, status } = useSession();
  const [student, setStudent] = useState<any>({});

  const loadStudent = async () => {
    setIsLoading(true);
    try {
      if (status === "authenticated" && session.user?.id) {
        const student = await getStudentByUserId(parseInt(session.user.id));
        if (student) {
          console.log(student);
          setStudent(student);
        }
      } else {
        toast.error("Not authenticated");
      }
    } catch (error: any) {
      toast.error(error.message);
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
      <div className="flex flex-1 flex-col p-5 bg-white rounded-md border">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-semibold">Hello, {student?.name}</h5>
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
              <StudentDocument studentid={student?.id} />
            </TabsContent>
            <TabsContent value="universities">
              <StudentUniversities studentid={student?.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StudentEdit;
