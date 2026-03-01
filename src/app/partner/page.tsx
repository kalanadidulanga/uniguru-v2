"use client";

import React, { useEffect, useState } from "react"; // Adjust the path as needed
import Card from "@/components/myComponents/Card";
import { Contact, FileQuestion } from "lucide-react";
import { getChartData, getDashboardData } from "@/actions/partner/dashboard";
import toast from "react-hot-toast";
import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import Select2 from "react-select";
import { getIntakes } from "@/actions/superAdmin/intakes";
import { PartnerChart } from "@/components/myComponents/PartnerChart";
import { useSession } from "next-auth/react";
import { loadNotice } from "@/actions/superAdmin/noticeboards";

// Define the types for the data structure
interface QuestionnaireData {
  total: number;
  Accepted: number;
  Rejected: number;
  Pending: number;
  StudentDeleted: number;
}

interface StudentData {
  total: number;
  Pending: number;
  Positive: number;
  Rejected: number;
  Completed: number;
  CompletedAndPaid: number;
}

interface DashboardData {
  questionnaires: QuestionnaireData;
  students: StudentData;
}

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const [data, setData] = useState<DashboardData>({
    questionnaires: {
      total: 0,
      Accepted: 0,
      Rejected: 0,
      Pending: 0,
      StudentDeleted: 0,
    },
    students: {
      total: 0,
      Pending: 0,
      Positive: 0,
      Rejected: 0,
      Completed: 0,
      CompletedAndPaid: 0,
    },
  });
  const [chartData, setChartData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [intakes, setIntakes] = useState<any>([]);
  const [selectedIntake, setSelectedIntake] = useState<any>(null);
  const [value, setValue] = useState("");
  const [datetime, setDatetime] = useState<any>("");

  const getData = async () => {
    try {
      const res = await getIntakes();
      if (res) {
        setIntakes(
          res.map((item: any) => ({ value: item.id, label: item.name }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await loadNotice();
      if (res) {
        console.log(res);
        setValue(res?.Notice || "");
        setDatetime(res?.dataTime);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getChartsData = async () => {
    try {
      if (status === "authenticated" && session.user?.id) {
        const res = await getChartData(session.user?.id);
        if (res) {
          setChartData(res);
          console.log(res);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getData();
    loadData();

    getChartsData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (status === "authenticated" && session.user?.id) {
          const result = await getDashboardData(
            session.user?.id,
            selectedIntake?.value
          );
          setData(result);
        }
      } catch (err) {
        toast.error("Error fetching data");
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedIntake]);

  const { questionnaires, students } = data;

  return (
    <div className="flex flex-1 flex-col p-5 relative">
      <div className="flex items-center justify-between mb-5 gap-3">
        <h5 className="text-xl font-semibold">Dashboard</h5>
        <Select2
          placeholder="Intake..."
          options={intakes}
          className=" w-64"
          value={selectedIntake}
          onChange={(e: any) => {
            if (e) {
              setSelectedIntake(e);
            }
          }}
        />
      </div>
      {loading && (
        <div className=" flex items-center justify-center border mb-5 bg-gray-100 rounded-md overflow-hidden">
          <AnimatedSVG className=" w-32" />
        </div>
      )}
      <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-8 transition-all">
        <Card
          icon={FileQuestion}
          label="All Questionnaires"
          amount={questionnaires.total}
          description={`Accepted: ${questionnaires.Accepted} | Rejected: ${questionnaires.Rejected} | Pending: ${questionnaires.Pending} | StudentDeleted: ${questionnaires.StudentDeleted}`}
          onClick={() => {}}
        />
        <Card
          icon={Contact}
          label="All Students"
          amount={students.total}
          description={`Pending: ${students.Pending} | Positive: ${students.Positive} | Rejected: ${students.Rejected} | Completed: ${students.Completed} | Completed & Paid for Partner: ${students.CompletedAndPaid}`}
          onClick={() => {}}
        />
        <div className="flex flex-col border w-full max-h-44 rounded-md overflow-y-auto p-3 bg-liter-orange">
          <div dangerouslySetInnerHTML={{ __html: value }}></div>
          <p className="font-semibold text-sm mt-3">
            {datetime
              ? new Date(datetime).toLocaleString("en-US")
              : "No date available"}
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-5">
        <PartnerChart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
