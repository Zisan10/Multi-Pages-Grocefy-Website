import React from "react";
import Banner from "../../banner/Banner";
import ProductsList from "../../productList/ProductsList";
import Card from "../../productCard/Card";

const CategoryPage = ({ title, BgImage, categories = [] }) => {
  let filteredItems = categories.includes("All")
    ? ProductsList
    : ProductsList.filter((item) => categories.includes(item.category));

  const renderProduct = filteredItems.map((product) => {
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
    <div>
      <Banner title={title} BgImage={BgImage} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-10 max-w-[1200px] mx-auto px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
