import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg md:text-lg
    hover:scale-105 hover:from-orange-700 transition-all cursor-pointer duration-300
    text-white px-8 py-2 text-md">
      {props.content}
    </button>
  );
};

export default Button;
