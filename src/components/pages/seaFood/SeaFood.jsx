import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import BgSeaFood from "../../../assets/seafood-banner.jpg";

const SeaFood = () => {
  return (
    <div>
      <CategoryPage
        title="Meat & SeaFood"
        BgImage={BgSeaFood}
        categories={["Meat", "SeaFood"]}
      />
    </div>
  );
};

export default SeaFood;
