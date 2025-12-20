import React from "react";
import Heading from "../categoryHeading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((value) => {
    return (
      <div
        key={value.id}
        className="flex md:flex-row-reverse items-center gap-5">
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white font-bold text-2xl rounded-full">
            {value.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-2xl font-bold">{value.title}</h3>
          <p className="text-zinc-800 mt-2">{value.para}</p>
        </div>
      </div>
    );
  });
  const rightValues = value.slice(2).map((value) => {
    return (
      <div key={value.id} className="flex items-center gap-5 ">
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white font-bold text-2xl rounded-full">
            {value.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-2xl font-bold">{value.title}</h3>
          <p className="text-zinc-800 mt-2">{value.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 pb-20">
        <Heading highlight="Our" heading="Values" />
        <div className="flex md:flex-row flex-col gap-10 md:gap-8 mt-15">
          {/* left values  */}
          <div className="md:min-h-100 flex flex-col justify-between gap-10">
            {leftValues}
          </div>
          {/* image middle  */}
          <div className="md:flex w-1/2 hidden">
            <img className="min-h-100" src={Basket} />
          </div>
          {/* right values  */}
          <div className="md:min-h-100 flex flex-col justify-between gap-10">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

//  value
const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
