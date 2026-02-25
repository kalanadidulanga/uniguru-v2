import {
  getStudentDocumentsById,
  updateStudentDocuments,
} from "@/actions/superAdmin/studentDocuments";
import { Button } from "@/components/myComponents/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Define the StudentDocuments type based on your data model
interface StudentDocuments {
  id: number;
  studentId: number;
  completedUniguruForm?: boolean;
  passportCopy?: boolean;
  ol?: boolean;
  al?: boolean;
  degreeCertificate?: boolean;
  degreeTranscript?: boolean;
  ieltsCertificate?: boolean;
  anUpToDateCV?: boolean;
  statementOfPurpose?: boolean;
  academicReferenceLetters?: boolean;
  professionalReferenceLetters?: boolean;
  serviceLetters?: boolean;
  notes?: string;
}

interface StudentDocumentProps {
  studentid: string;
}

const StudentDocument: React.FC<StudentDocumentProps> = ({ studentid }) => {
  const [studentDocuments, setStudentDocuments] =
    useState<StudentDocuments | null>(null);
  const [editedData, setEditedData] = useState<Partial<StudentDocuments>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadStudentDocuments = async () => {
    try {
      setIsLoading(true);
      const res = await getStudentDocumentsById(studentid);
      if (res) setStudentDocuments(res as StudentDocuments);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadStudentDocuments();
  }, [studentid]);

  const handleFieldChange = (field: keyof StudentDocuments, value: any) => {
    setStudentDocuments((prev) => ({
      ...prev!,
      [field]: value,
    }));
    setEditedData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    if (Object.keys(editedData).length === 0) {
      toast("No changes to save");
      return;
    }
    try {
      setIsLoading(true);
      const res = await updateStudentDocuments(editedData, studentid);
      if (res) {
        toast.success("Student documents updated successfully");
        loadStudentDocuments();
        setEditedData({}); // Reset edited data after saving
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col mt-8 gap-5">
      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="completedUniguruForm"
            checked={studentDocuments?.completedUniguruForm || false}
            onCheckedChange={(checked) =>
              handleFieldChange("completedUniguruForm", checked)
            }
          />
          <Label
            htmlFor="completedUniguruForm"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Completed Uniguru Form
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="passportCopy"
            checked={studentDocuments?.passportCopy || false}
            onCheckedChange={(checked) =>
              handleFieldChange("passportCopy", checked)
            }
          />
          <Label
            htmlFor="passportCopy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Passport copy
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="ol"
            checked={studentDocuments?.ol || false}
            onCheckedChange={(checked) => handleFieldChange("ol", checked)}
          />
          <Label
            htmlFor="ol"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            O\L
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="al"
            checked={studentDocuments?.al || false}
            onCheckedChange={(checked) => handleFieldChange("al", checked)}
          />
          <Label
            htmlFor="al"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            A\L
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="degreeCertificate"
            checked={studentDocuments?.degreeCertificate || false}
            onCheckedChange={(checked) =>
              handleFieldChange("degreeCertificate", checked)
            }
          />
          <Label
            htmlFor="degreeCertificate"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Degree Certificate
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="degreeTranscript"
            checked={studentDocuments?.degreeTranscript || false}
            onCheckedChange={(checked) =>
              handleFieldChange("degreeTranscript", checked)
            }
          />
          <Label
            htmlFor="degreeTranscript"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Degree Transcript
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="ieltsCertificate"
            checked={studentDocuments?.ieltsCertificate || false}
            onCheckedChange={(checked) =>
              handleFieldChange("ieltsCertificate", checked)
            }
          />
          <Label
            htmlFor="ieltsCertificate"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            IELTS certificate
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="anUpToDateCV"
            checked={studentDocuments?.anUpToDateCV || false}
            onCheckedChange={(checked) =>
              handleFieldChange("anUpToDateCV", checked)
            }
          />
          <Label
            htmlFor="anUpToDateCV"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            An up-to-date CV
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="statementOfPurpose"
            checked={studentDocuments?.statementOfPurpose || false}
            onCheckedChange={(checked) =>
              handleFieldChange("statementOfPurpose", checked)
            }
          />
          <Label
            htmlFor="statementOfPurpose"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Statement of Purpose
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="academicReferenceLetters"
            checked={studentDocuments?.academicReferenceLetters || false}
            onCheckedChange={(checked) =>
              handleFieldChange("academicReferenceLetters", checked)
            }
          />
          <Label
            htmlFor="academicReferenceLetters"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Academic reference letters
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="professionalReferenceLetters"
            checked={studentDocuments?.professionalReferenceLetters || false}
            onCheckedChange={(checked) =>
              handleFieldChange("professionalReferenceLetters", checked)
            }
          />
          <Label
            htmlFor="professionalReferenceLetters"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            professional reference letters
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="serviceLetters"
            checked={studentDocuments?.serviceLetters || false}
            onCheckedChange={(checked) =>
              handleFieldChange("serviceLetters", checked)
            }
          />
          <Label
            htmlFor="serviceLetters"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Service letters
          </Label>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
        <Textarea
          rows={5}
          className=" col-span-2"
          placeholder="Notes"
          value={studentDocuments?.notes || ""}
          onChange={(e) => handleFieldChange("notes", e.target.value)}
        />
      </div>

      {editedData && Object.keys(editedData).length > 0 && (
        <Button
          className="mr-auto px-8"
          variant={"blue2"}
          size={"sm"}
          onClick={() => {
            handleSave();
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Save"}
        </Button>
      )}
    </div>
  );
};

export default StudentDocument;
