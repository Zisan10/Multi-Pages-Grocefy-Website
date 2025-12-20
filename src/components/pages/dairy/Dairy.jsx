import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import BgDairy from "../../../assets/dairy-banner.jpg";

const Dairy = () => {
  return (
    <div>
      <CategoryPage
        title="Dairy & Eggs"
        BgImage={BgDairy}
        categories={["Dairy"]}
      />
    </div>
  );
};

export default Dairy;
