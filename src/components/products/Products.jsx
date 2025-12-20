import React, { useState } from "react";
import Heading from "../categoryHeading/Heading";

import ProductList from "../productList/ProductsList";
import Card from "../productCard/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];

  let filteredItem =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  //   map productList add card component
  const productCards = filteredItem.slice(0, 8).map((product) => {
    return (
      <Card
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 pb-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs  */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-8 py-2 text-lg rounded-lg cursor-pointer
                         ${
                           activeTab === category
                             ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                             : "bg-zinc-100"
                         }`}
                onClick={() => {
                  setActiveTab(category);
                }}>
                {category}
              </button>
            );
          })}
        </div>
        {/* product Listing  */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-20 gap-8">
          {productCards}
        </div>
        {/* see all button  */}
        <div className="mt-10 mx-auto w-fit">
          <Link
            to="/all-products"
            className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg md:text-lghover:scale-105 hover:from-orange-700 transition-all cursor-pointer duration-300 text-white px-8 py-2 text-md">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
