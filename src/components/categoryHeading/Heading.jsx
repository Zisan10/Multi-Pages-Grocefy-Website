import React from "react";

const Heading = (props) => {
  return (
    <div className="w-fit mx-auto">
      <h2 className="md:text-4xl text-[2rem] text-zinc-800 font-bold">
        <span className="text-orange-500">{props.highlight}</span>{" "}
        {props.heading}
      </h2>
      <div className="w-25 bg-orange-400 h-1 md:mt-3 mt-1 ml-auto"></div>
    </div>
  );
};

export default Heading;
