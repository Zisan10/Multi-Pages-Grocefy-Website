import React from "react";

import Heading from "../categoryHeading/Heading";
import FrutsCat from "../../assets/fruits-and-veggies.png";
import SeaFoodCat from "../../assets/meat-and-seaFood.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCard = category.map((card) => {
    return (
      // Card
      <div key={card.id} className="flex-1 basis-[280px]">
        {/* Card Image  */}
        <div className="w-full min-h-[32vh] -mb-10 relative">
          <img src={card.image} alt="image" className="absolute bottom-0" />
        </div>
        {/* Card Content  */}
        <div className="bg-zinc-100 pt-15 p-6 rounded-lg">
          <h3 className="text-zinc-800 text-2xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-2 mb-7">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg md:text-lg hover:scale-105 hover:from-orange-700 transition-all cursor-pointer duration-300 text-white px-8 py-2 text-md">
            See All
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />
        {/* food category card  */}
        <div className="flex flex-wrap gap-10 md:mt-15">{renderCard}</div>
      </div>
    </section>
  );
};

export default Category;

// Food category card

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FrutsCat,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
    path: "/sea-food",
  },
];
