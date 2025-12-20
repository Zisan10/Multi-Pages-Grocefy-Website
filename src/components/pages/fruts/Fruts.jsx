import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import BgFruits from "../../../assets/fruits-banner.jpg";

const Fruts = () => {
  return (
    <div>
      <CategoryPage
        title="Fruits & Veggies"
        BgImage={BgFruits}
        categories={["Vegetables", "Fruits"]}
      />
    </div>
  );
};

export default Fruts;
