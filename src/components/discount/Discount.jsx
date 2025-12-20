import React from "react";
import Button from "../button/Button";
import FreshFruit from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${FreshFruit})` }}>
      <div className="md:bg-transparent bg-zinc-100 max-w-[1200px] mx-auto px-10 py-5 flex md:flex-row flex-col ">
        <span className="text-orange-500 md:text-7xl text-4xl font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-[600px]">
          <h3 className="text-zinc-900 md:text-6xl text-4xl font-bold mt-2">
            First Order Discount!
          </h3>
          <p className="text-zinc-600 py-5">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
