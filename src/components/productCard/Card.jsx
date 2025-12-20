import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../button/Button";

const Card = ({ image, name, price }) => {
  return (
    <div className="bg-zinc-100 p-5 rounded-lg">
      {/* card icons  */}
      <div className="flex justify-between">
        <span className="text-zinc-300 text-2xl cursor-pointer">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg text-white px-3 py-2 cursor-pointer">
          <FaPlus />
        </button>
      </div>
      {/* card image  */}
      <div className="w-full h-40">
        <img src={image} className="w-full h-full object-contain" />
      </div>
      {/* card content  */}
      <div className="text-center">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Card;
