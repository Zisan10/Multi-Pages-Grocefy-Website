import React from "react";

import Grocery from "../../assets/grocery.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen max-w-[1200px] px-10 mx-auto flex md:flex-row flex-col items-center md:pt-25 pt-25">
        {/* hero content  */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-6xl/20 text-4xl/13 font-bold mt-4 ">
            Tasty Organic <br /> <span className="text-orange-500">Fruits</span>{" "}
            &<span className="text-orange-500"> Veggies</span> <br /> In Your
            City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>
        {/* hero image  */}
        <div className="flex-1">
          <img src={Grocery} alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
