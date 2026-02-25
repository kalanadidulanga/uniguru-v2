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

  const handleSave = async (index: number, id: number) => {
    const updatedItem = editedData[index];
    if (updatedItem) {
      // Implement save logic here, e.g., making an API call to update the data on the server
      console.log("Saving item:", updatedItem);

      try {
        setIsLoading(true);
        const res = await updateStudentUniversity(id, updatedItem);
        if (res) {
          toast.success("University updated successfully");
          await loadStudentUniversities();
          setEditedData((prev) => {
            const updatedState = { ...prev };
            delete updatedState[index];
            return updatedState;
          });
        }
      } catch (error: any) {
        toast.error(
          error.message || "An error occurred while updating the university"
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDelete = async (id: number) => {
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
            const res = await deleteStudentUniversity(id);
            if (!res) {
              return Swal.showValidationMessage("Failed to delete");
            }
            return res;
          } catch (error) {
            return Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(), // Prevent outside clicks while loading
      });

      if (result.isConfirmed && result.value) {
        toast.success("Deleted successfully.");
        loadStudentUniversities();
      }
    } catch (error) {
      console.error(error);
    }
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
                  <div className="grid grid-cols-3 gap-5">
                    {/* University Select */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`university-${index}`}>University</Label>
                      <Select2
                        isDisabled={true}
                        isSearchable={true}
                        name={`university-${index}`}
                        options={universitiesList}
                        value={
                          editedData[index]?.university || {
                            value: item?.university?.id,
                            label: item?.university?.name,
                          }
                        }
                        onChange={(e: any) => {
                          if (e) {
                            handleInputChange(index, "university", {
                              value: e.value,
                              label: e.label,
                            });
                          }
                        }}
                      />
                    </div>

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
                        onChange={(e) =>
                          handleInputChange(index, "country", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleInputChange(index, "courseName", e.target.value)
                        }
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`courseUrl-${index}`}>Course Url</Label>
                      <Input
                        type="text"
                        name={`courseUrl-${index}`}
                        placeholder="courseUrl"
                        className="w-full"
                        value={
                          editedData[index]?.courseUrl || item?.courseUrl || ""
                        }
                        onChange={(e) =>
                          handleInputChange(index, "courseUrl", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "annualTutionFee",
                            e.target.value
                          )
                        }
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
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "scholarship",
                            e.target.value
                          )
                        }
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
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "initialUniversityFee",
                            e.target.value
                          )
                        }
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
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "requiredIELTSScore",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`statusNotes-${index}`}>
                        Current Status Note
                      </Label>
                      <Textarea
                        rows={5}
                        name={`statusNotes-${index}`}
                        placeholder="Notes"
                        className="w-full"
                        value={
                          editedData[index]?.statusNotes ||
                          item?.statusNotes ||
                          ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "statusNotes",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    {/* Status Select */}
                    <div className="flex flex-col gap-2">
                      <Label htmlFor={`status-${index}`}>Status</Label>
                      <Select2
                        isSearchable={true}
                        name={`status-${index}`}
                        options={statusList}
                        value={
                          editedData[index]?.currentStatus ||
                          item?.currentStatus ||
                          null
                        }
                        onChange={(e: SelectOption | null) => {
                          if (e) {
                            handleInputChange(index, "currentStatus", {
                              value: e.value,
                              label: e.label,
                            });
                          }
                        }}
                      />
                    </div>

                    <div className=" w-full max-h-[150px] overflow-hidden flex items-center justify-center">
                      <Image
                        src={item?.university?.imageUrl}
                        width={300}
                        height={100}
                        alt="University Image"
                        className=" h-full w-auto object-cover object-center"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`tuitionPaid-${index}`}
                        checked={
                          editedData[index]?.tuitionPaid !== undefined
                            ? editedData[index]?.tuitionPaid
                            : item?.tuitionPaid
                        }
                        onCheckedChange={(e: boolean) => {
                          handleInputChange(index, "tuitionPaid", e);
                        }}
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
                        onCheckedChange={(e: boolean) => {
                          handleInputChange(
                            index,
                            "financialDocumentationConsultation",
                            e
                          );
                        }}
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
                        onCheckedChange={(e: boolean) => {
                          handleInputChange(index, "tbTestCompleted", e);
                        }}
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
                        onCheckedChange={(e: boolean) => {
                          handleInputChange(index, "fundsMaturedInTheBank", e);
                        }}
                      />
                      <Label
                        htmlFor={`fundsMaturedInTheBank-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Funds Matured in the Bank
                      </Label>
                    </div>
                  </div>

                  <div className=" flex gap-5">
                    {editedData[index] && (
                      <Button
                        size="sm"
                        className="mt-5 px-8"
                        onClick={() => handleSave(index, item.id)}
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save"}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      className="mt-5 px-8"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="flex gap-5">
        <NewStudentUniversity
          studentid={studentid}
          statusList={statusList}
          universitiesList={universitiesList}
          reload={loadStudentUniversities}
        />
      </div>
    </div>
  );
};

const NewStudentUniversity = ({
  studentid,
  statusList,
  universitiesList,
  reload,
}: any) => {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const [studentUniversityData, setStudentUniversityData] =
    useState<StudentUniversityData>({
      country: "",
      currentStatusId: 0,
      universityId: 0,
      courseName: "",
    });

  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    try {
      setIsLoading(true);
      console.log(studentUniversityData);
      const res = await newStudentUniversity(
        studentUniversityData,
        parseInt(studentid)
      );
      if (res) {
        toast.success("University added successfully");
        setStudentUniversityData({
          country: "",
          currentStatusId: 0,
          universityId: 0,
          courseName: "",
        });
        setSelectedStatus(null);
        setSelectedUniversity(null);
        reload();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="blue2" size="sm" className="px-8" disabled={isLoading}>
          add new
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply new university</DialogTitle>
        </DialogHeader>
        <div className=" flex flex-col mt-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="country">Country</Label>
              <Input
                type="text"
                name="country"
                placeholder="Country"
                className="w-full"
                value={studentUniversityData?.country}
                onChange={(e) => {
                  setStudentUniversityData((prev) => ({
                    ...prev!,
                    country: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="courseName">Course Name</Label>
              <Input
                type="text"
                name="courseName"
                placeholder="Course Name"
                className="w-full"
                value={studentUniversityData?.courseName}
                onChange={(e) => {
                  setStudentUniversityData((prev) => ({
                    ...prev!,
                    courseName: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="university">University</Label>
              <Select2
                isSearchable={true}
                name="university"
                options={universitiesList}
                value={selectedUniversity}
                onChange={(e: any) => {
                  setSelectedUniversity(e);
                  setStudentUniversityData((prev) => ({
                    ...prev!,
                    universityId: e.value,
                  }));
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Status</Label>
              <Select2
                isSearchable={true}
                name="status"
                options={statusList}
                value={selectedStatus}
                onChange={(e: any) => {
                  setSelectedStatus(e);
                  setStudentUniversityData((prev) => ({
                    ...prev!,
                    currentStatusId: e.value,
                  }));
                }}
              />
            </div>
          </div>
          <Button
            className=" mt-5"
            size={"sm"}
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentUniversities;
