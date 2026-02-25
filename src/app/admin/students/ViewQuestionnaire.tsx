import { Button } from "@/components/myComponents/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { View } from "lucide-react";
import React from "react";

const ViewQuestionnaire = ({ dataSet, data }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <View />
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Questionnaire</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-5 my-3">
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Name</span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {dataSet?.name}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Email</span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {dataSet?.email}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Mobile</span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {dataSet?.mobile}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Agent Code</span>
            <div className="bg-white px-2 py-2 min-h-10 rounded border flex items-center">
              {dataSet?.agentcode}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Country</span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.country}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">Birth Date</span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.dob}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What intake are you interested in?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {dataSet?.intake?.name}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What is the course level you are interested in
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.courselevel}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What is the subject that you are interested in?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.subject}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What is your O/L English subject result?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.olenglish}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What is your A/L English subject result?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.alenglish}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              Have you sat for an English exam such as IELTS or PTE in the last
              2 years?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.ieltsorpte}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What is your highest academic qualification and when was it
              awarded?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.academicqulification}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What was the final grade awarded for your highest academic
              qualification?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.finalgradeforhighestqualification}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              Do you have gaps of more than 3 months on your CV?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.gapmorethanthreemonthsoncv}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              Do you have previous visa refusals from any country?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.doyouhavepreviousvisarefusal}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              What is your current relationship status?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.whatisyourcurrentrelationshipstatus}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              Are you planning to bring dependents?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.areyouplanningtobringdependents}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-semibold">
              Do you have at least 2.5 million LKR for University fees available
              immediately?
            </span>
            <div className="bg-white px-2 py-2 rounded border flex items-center min-h-10">
              {data?.Doyouhaveatleast2millionLKR}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewQuestionnaire;
