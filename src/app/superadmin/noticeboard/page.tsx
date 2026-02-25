"use client";

import {
  loadNotice,
  updateNoticeBoard,
} from "@/actions/superAdmin/noticeboards";
import { Button } from "@/components/myComponents/button";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Disable server-side rendering for this component
});
import "react-quill/dist/quill.snow.css";

const NoticeBoard = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [datetime, setDatetime] = useState<any>("");

  const loadData = async () => {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleNotice = async () => {
    try {
      setIsLoading(true);
      const res = await updateNoticeBoard({
        id: 1,
        Notice: value,
        dataTime: new Date(), // Use new Date() instead of new Date().getTime()
      });
      if (res) {
        toast.success("Notice updated successfully");
        loadData();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">Partner Notice Board</h5>
      </div>
      <div className=" w-full h-auto my-5">
        <div className="flex flex-col gap-3">
          <ReactQuill
            className="h-64"
            theme="snow"
            value={value}
            onChange={(text) => {
              if (text.length <= 500) {
                setValue(text);
              } else {
                toast.error(
                  "Notice is too long! Maximum 500 characters allowed."
                );
              }
            }}
          />

          <div className=" flex items-center gap-8 mt-12">
            <Button
              className=" px-8"
              size={"sm"}
              variant={"blue2"}
              onClick={handleNotice}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </Button>
            <div className="font-semibold text-sm">
              {datetime
                ? new Date(datetime).toLocaleString()
                : "No date available"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
