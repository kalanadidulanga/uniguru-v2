"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/myComponents/Card";
import { Contact, FileQuestion, Handshake } from "lucide-react";
import toast from "react-hot-toast";
import AnimatedSVG from "@/components/myComponents/AnimatedSVG";
import Select2 from "react-select";
import { getIntakes } from "@/actions/superAdmin/intakes";
import { PartnerChart } from "@/components/myComponents/PartnerChart";
import { useSession } from "next-auth/react";
import { getChartData, getDashboardData } from "@/actions/superAdmin/dashboard";

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
  partners: any;
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
    partners: {
      total: 0,
    },
  });
  const [chartData, setChartData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [intakes, setIntakes] = useState<any>([]);
  const [selectedIntake, setSelectedIntake] = useState<any>(null);

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

  const getChartsData = async () => {
    try {
      const res = await getChartData();
      if (res) {
        setChartData(res);
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    getChartsData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDashboardData(selectedIntake?.value);

        // Ensure that result has the expected structure
        setData({
          questionnaires: result.questionnaires || {
            total: 0,
            Accepted: 0,
            Rejected: 0,
            Pending: 0,
            StudentDeleted: 0,
          },
          students: result.students || {
            total: 0,
            Pending: 0,
            Positive: 0,
            Rejected: 0,
            Completed: 0,
            CompletedAndPaid: 0,
          },
          partners: result.partners || { total: 0 },
        });
      } catch (err) {
        toast.error("Error fetching data");
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedIntake]);

  const { questionnaires, students, partners } = data;

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
          amount={questionnaires?.total || 0}
          description={`Accepted: ${
            questionnaires?.Accepted || 0
          } | Rejected: ${questionnaires?.Rejected || 0} | Pending: ${
            questionnaires?.Pending || 0
          } | StudentDeleted: ${questionnaires?.StudentDeleted || 0}`}
          onClick={() => {}}
        />
        <Card
          icon={Contact}
          label="All Students"
          amount={students?.total || 0}
          description={`Pending: ${students?.Pending || 0} | Positive: ${
            students?.Positive || 0
          } | Rejected: ${students?.Rejected || 0} | Completed: ${
            students?.Completed || 0
          } | Completed & Paid for Partner: ${students?.CompletedAndPaid || 0}`}
          onClick={() => {}}
        />
        <Card
          icon={Handshake}
          label="All Partners"
          amount={partners?.total || 0}
          description={`Total: ${partners?.total || 0}`}
          onClick={() => {}}
        />
      </div>
      <div className=" flex items-center justify-center mt-5">
        <PartnerChart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
