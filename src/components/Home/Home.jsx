import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroArea/Hero";
import Category from "../category/Category";
import Values from "../values/Values";
import Products from "../products/Products";
import Discount from "../discount/Discount";
import Process from "../process/Process";
import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
    </div>
  );
};

export default Home;
