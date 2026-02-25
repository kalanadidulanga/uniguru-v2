import { HOW_DO_WE_HELP_STUDENTS } from "@/constants/data";
import React from "react";

const HowDoWeHelpStudents = () => {
    return (
        <div className="my-container flex flex-col py-24 items-center gap-14">
            <h3 className="text-4xl font-bold text-my-blue text-center">
                How do we help <span className="text-my-orange">Students?</span>
            </h3>
            <div className=" w-full flex flex-wrap justify-center">
                {HOW_DO_WE_HELP_STUDENTS.map((item, index) => (
                    <div key={index} className="p-5 text-center w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                        <Box data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowDoWeHelpStudents;

const Box = ({ data }: { data: { name: string; p: string; link: string } }) => {
    return (
        <div
            className={` text-center w-full h-full overflow-hidden rounded-2xl flex flex-col items-center justify-center shadow-xl bg-cover bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${data.link})` }}
        >

            <div className="bg-white/90 w-full h-full flex flex-col items-center justify-center gap-8 px-8 py-14">
                <h5 className="text-2xl font-semibold">{data.name}</h5>
                <p className="text-sm md:text-base text-center">{data.p}</p>
            </div>
        </div>
    );
};
