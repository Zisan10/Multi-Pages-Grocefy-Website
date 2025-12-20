import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import BgAllImg from "../../../assets/all-banner.jpg";

const AllProducts = () => {
  return (
    <div>
      <CategoryPage
        title="All Products"
        BgImage={BgAllImg}
        categories={["All"]}
      />
    </div>
  );
};

export default AllProducts;
