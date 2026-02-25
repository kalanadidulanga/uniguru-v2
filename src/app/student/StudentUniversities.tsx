import { getStudentUniversityStatus } from "@/actions/superAdmin/students";
import {
  deleteStudentUniversity,
  getUniversitiesByStudentId,
  newStudentUniversity,
  updateStudentUniversity,
} from "@/actions/superAdmin/studentUniversiti";
import { getUniversityList } from "@/actions/superAdmin/univercitiesList";
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
import { Select } from "@/components/ui/select";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select2 from "react-select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Swal from "sweetalert2";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

interface StudentUniversityData {
  country: string;
  currentStatusId: number;
  universityId: number;
  courseName: string;
}

// Define types for the data
interface UniversityData {
  id: string;
  country: string;
  university: {
    value: string;
    label: string;
  };
  currentStatus?: {
    value: string;
    label: string;
  };
  courseName: string;
  courseUrl?: string;
  annualTutionFee?: String;
  scholarship?: String;
  initialUniversityFee?: String;
  requiredIELTSScore?: String;
  financialDocumentationConsultation: boolean;
  fundsMaturedInTheBank: boolean;
  remarks?: string;
  statusNotes?: string;
  tbTestCompleted: boolean;
  tuitionPaid: boolean;
}

interface SelectOption {
  label: string;
  value: string;
}

interface MyComponentProps {
  studentUniversitiesData: UniversityData[];
  universitiesList: SelectOption[];
  statusList: SelectOption[];
}

const StudentUniversities = ({ studentid }: { studentid: string }) => {
  const [universitiesList, setUniversitiesList] = useState<any[]>([]);
  const [statusList, setStatusList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [studentUniversitiesData, setStudentUniversitiesData] = useState<any[]>(
    []
  );

  const loadData = async () => {
    try {
      const res = await getUniversityList();
      if (res) {
        let data = res.map((item: any) => {
          return {
            value: item.id,
            label: item.name,
          };
        });
        // console.log(data);
        setUniversitiesList(data);
      }

      const res2 = await getStudentUniversityStatus();
      if (res2) {
        // console.log(res2);
        setStatusList(res2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadStudentUniversities = async () => {
    try {
      const res = await getUniversitiesByStudentId(parseInt(studentid));
      if (res) {
        console.log(res);
        setStudentUniversitiesData(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [editedData, setEditedData] = useState<
    Record<number, Partial<UniversityData>>
  >({});

  const handleInputChange = (
    index: number,
    field: keyof UniversityData,
    value: any
  ) => {
    setEditedData((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadStudentUniversities();
    loadData();
  }, []);

  return (
    <div className="flex flex-1 flex-col mt-5 gap-5">
      <div className="flex flex-col gap-3">
        {studentUniversitiesData?.map((item, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={item.id}>
              <AccordionTrigger>
                <div className="flex items-center gap-5">
                  {item?.university?.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-1">
                <div className="flex flex-col flex-1 gap-5">
                  <div className="flex flex-col items-center justify-center">
                    <div className=" p-1 overflow-hidden flex items-center justify-center border-2 rounded-md shadow-md mb-3">
                      <Image
                        src={item?.university?.imageUrl}
                        width={300}
                        height={100}
                        alt="University Image"
                        className=" object-center"
                      />
                    </div>
                    <Link
                      href={item?.university?.websiteUrl}
                      target="_blank"
                      className=" text-xl md:text-2xl text-center font-semibold hover:underline"
                    >
                      {item?.university?.name}
                    </Link>
                    {item?.courseUrl && (
                      <Link
                        href={item?.courseUrl}
                        target="_blank"
                        className=" text-center font-medium hover:underline mt-2"
                      >
                        {item?.courseName}
                      </Link>
                    )}
                  </div>

                  <Separator />
                  <div className="w-full flex flex-col status-track">
                    <div className="max-w-full overflow-x-auto">
                      <ProgressBar
                        currentStatus={item.currentStatus}
                        statuses={statusList}
                      />
                    </div>
                  </div>
                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Country Input */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`country-${index}`}>Country</Label>
                      <Input
                        type="text"
                        name={`country-${index}`}
                        placeholder="Country"
                        className="w-full"
                        value={
                          editedData[index]?.country || item?.country || ""
                        }
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`courseName-${index}`}>Course Name</Label>
                      <Input
                        type="text"
                        name={`courseName-${index}`}
                        placeholder="Course Name"
                        className="w-full"
                        value={
                          editedData[index]?.courseName ||
                          item?.courseName ||
                          ""
                        }
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`currentStatus-${index}`}>
                        Current Status
                      </Label>
                      <Input
                        type="text"
                        name={`currentStatus-${index}`}
                        placeholder="currentStatus"
                        className="w-full"
                        value={
                          editedData[index]?.currentStatus?.label ||
                          item?.currentStatus.label ||
                          ""
                        }
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`scholarship-${index}`}>
                        Scholarship
                      </Label>
                      <Input
                        type="text"
                        name={`scholarship-${index}`}
                        placeholder="scholarship"
                        className="w-full"
                        value={
                          editedData[index]?.scholarship ||
                          item?.scholarship ||
                          ""
                        }
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`annualTutionFee-${index}`}>
                        Annual Tution Fee
                      </Label>
                      <Input
                        type="text"
                        name={`annualTutionFee-${index}`}
                        placeholder="annualTutionFee"
                        className="w-full"
                        value={
                          editedData[index]?.annualTutionFee ||
                          item?.annualTutionFee ||
                          ""
                        }
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`initialUniversityFee-${index}`}>
                        Initial University Fee
                      </Label>
                      <Input
                        type="text"
                        name={`initialUniversityFee-${index}`}
                        placeholder="initialUniversityFee"
                        className="w-full"
                        value={
                          editedData[index]?.initialUniversityFee ||
                          item?.initialUniversityFee ||
                          ""
                        }
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`requiredIELTSScore-${index}`}>
                        Required IELTS Score
                      </Label>
                      <Input
                        type="text"
                        name={`requiredIELTSScore-${index}`}
                        placeholder="requiredIELTSScore"
                        className="w-full"
                        value={
                          editedData[index]?.requiredIELTSScore ||
                          item?.requiredIELTSScore ||
                          ""
                        }
                        readOnly
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`statusNotes-${index}`}>
                        Current Status Note
                      </Label>
                      <Textarea
                        rows={5}
                        name={`statusNotes-${index}`}
                        placeholder="Country"
                        className="w-full"
                        value={
                          editedData[index]?.statusNotes ||
                          item?.statusNotes ||
                          ""
                        }
                        readOnly
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`tuitionPaid-${index}`}
                        checked={
                          editedData[index]?.tuitionPaid !== undefined
                            ? editedData[index]?.tuitionPaid
                            : item?.tuitionPaid
                        }
                      />
                      <Label
                        htmlFor={`tuitionPaid-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tuition Paid
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`financialDocumentationConsultation-${index}`}
                        checked={
                          editedData[index]
                            ?.financialDocumentationConsultation !== undefined
                            ? editedData[index]
                                ?.financialDocumentationConsultation
                            : item?.financialDocumentationConsultation
                        }
                      />
                      <Label
                        htmlFor={`financialDocumentationConsultation-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Financial Documentation Consultation
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`tbTestCompleted-${index}`}
                        checked={
                          editedData[index]?.tbTestCompleted !== undefined
                            ? editedData[index]?.tbTestCompleted
                            : item?.tbTestCompleted
                        }
                      />
                      <Label
                        htmlFor={`tbTestCompleted-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        TB Test Completed
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`fundsMaturedInTheBank-${index}`}
                        checked={
                          editedData[index]?.fundsMaturedInTheBank !== undefined
                            ? editedData[index]?.fundsMaturedInTheBank
                            : item?.fundsMaturedInTheBank
                        }
                      />
                      <Label
                        htmlFor={`fundsMaturedInTheBank-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Funds Matured in the Bank
                      </Label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default StudentUniversities;
