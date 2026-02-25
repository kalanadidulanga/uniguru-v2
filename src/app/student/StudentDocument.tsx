import {
  getStudentDocumentsById,
  updateStudentDocuments,
} from "@/actions/superAdmin/studentDocuments";
import { Button } from "@/components/myComponents/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadStudentDocuments = async () => {
    try {
      setIsLoading(true);
      const res = await getStudentDocumentsById(studentid);
      console.log(res);
      if (res) {
        setStudentDocuments(res as StudentDocuments);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadStudentDocuments();
  }, [studentid]);

  return (
    <div className="flex flex-1 flex-col mt-8 gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="completedUniguruForm"
            checked={studentDocuments?.completedUniguruForm || false}
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
          />
          <Label
            htmlFor="passportCopy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Passport copy
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="ol" checked={studentDocuments?.ol || false} />
          <Label
            htmlFor="ol"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            O/L
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="al" checked={studentDocuments?.al || false} />
          <Label
            htmlFor="al"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            A/L
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="degreeCertificate"
            checked={studentDocuments?.degreeCertificate || false}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        <Textarea
          rows={5}
          className=" col-span-2"
          placeholder="Notes"
          value={studentDocuments?.notes || ""}
          onChange={(e) =>
            setStudentDocuments((prev) => ({ ...prev!, notes: e.target.value }))
          }
          readOnly
        />
        <p className=" text-my-gray2 text-sm md:text-base w-full max-w-3xl text-center">
          Send your Documents to{" "}
          <span className=" font-semibold text-my-black">
            <Link
              href={"mailto:careers@uniguru.co"}
              target="_blank"
              rel="noopener noreferrer"
            >
              info@uniguru.co
            </Link>
          </span>
          , and we’ll get in touch with you to update your status.
        </p>
      </div>
    </div>
  );
};

export default StudentDocument;
