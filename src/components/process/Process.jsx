import React from "react";
import Heading from "../categoryHeading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const topRenderSteps = steps.slice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col justify-center items-center -mb-15 md:mb-5 basis-[280px]">
        <div>
          <span className="flex justify-center items-center w-12 h-12 bg-zinc-800 text-white rounded-full text-6xl outline-offset-8 outline-dashed outline-[3px] outline-zinc-800">
            {item.number}
          </span>
        </div>
        <div className="flex justify-center items-center gap-5 pt-10">
          <span className="bg-orange-500 w-12 h-12 md:w-13 md:h-10 flex items-center justify-center text-xl text-white rounded-full">
            {item.icon}
          </span>
          <div className="">
            <h4 className="text-2xl text-zinc-800 font-bold">{item.title}</h4>
            <p className="text-zinc-600">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });
  const bottomRenderSteps = steps.slice(2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col justify-center items-center -mb-20 basis-[280px]">
        <div>
          <span className="flex justify-center items-center w-12 h-12 bg-zinc-800 text-white rounded-full text-6xl outline-offset-8 outline-dashed outline-[3px] outline-zinc-800">
            {item.number}
          </span>
        </div>
        <div className="flex justify-center items-center gap-5 pt-10">
          <span className="bg-orange-500 w-12 h-12 md:w-13 md:h-10 flex items-center justify-center text-xl text-white rounded-full">
            {item.icon}
          </span>
          <div className="">
            <h4 className="text-2xl text-zinc-800 font-bold">{item.title}</h4>
            <p className="text-zinc-600">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="mr-auto w-fit md:mb-15">
          <Heading highlight="Our" heading="Process" />
        </div>

        {/* render steps  */}
        <div className="flex flex-col md:flex-row justify-between md:mb-10 md:mr-auto md:ml-75 ">
          {topRenderSteps}
        </div>
        <div className="flex flex-col md:flex-row  justify-between md:w-[860px]">
          {bottomRenderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
