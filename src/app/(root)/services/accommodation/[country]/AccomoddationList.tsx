"use client";

import { getAccommadationforClient } from "@/actions/superAdmin/accommodation";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const AccomoddationList = ({ country }: any) => {
  const [dataSet, setDataSet] = useState<any>();

  useEffect(() => {
    const loadAccommodationData = async () => {
      const res = await getAccommadationforClient(country);
      if (res) {
        console.log(res);
        setDataSet(res);
      }
    };
    loadAccommodationData();
  }, [country]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {dataSet?.map((item: any, index: number) => (
        <div
          key={index}
          className=" flex flex-col w-full h-full rounded-lg shadow-lg hover:shadow-2xl duration-300"
        >
          <Image
            src={item?.src}
            alt=""
            width={300}
            height={300}
            className=" w-full h-[250px] rounded-t-lg object-cover object-center"
          />
          <div className=" flex flex-col p-3 md:p-5 gap-3 mt-3">
            <p className=" text-xl font-semibold">{item?.name}</p>
            <p>{item?.desc}</p>
            <p className=" flex items-center gap-2">
              <MapPin size={18} /> {item.location}
            </p>
            <div className=" flex items-center justify-between text-my-blue">
              <p>{item.price}</p>
              <p className="">{item?.destination?.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccomoddationList;
