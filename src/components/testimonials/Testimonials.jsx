import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Heading from "../categoryHeading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 pb-20 md:py-20">
        <Heading highlight="Customers" heading="Saying" />
        <div className="flex justify-end gap-x-3 mt-5 py-5">
          <button className="custom-prev flex justify-center items-center cursor-pointer w-10 h-10 transition-colors bg-zinc-100 hover:bg-gradient-to-b from-orange-400 to-orange-500 hover:text-white bg-zinc-100 text-zinc-800 rounded-lg text-2xl">
            <IoIosArrowBack />
          </button>
          <button className="custom-next flex justify-center items-center cursor-pointer w-10 h-10 transition-colors bg-zinc-100 hover:bg-gradient-to-b from-orange-400 to-orange-500 hover:text-white bg-zinc-100 text-zinc-800 rounded-lg text-2xl">
            <IoIosArrowForward />
          </button>
        </div>
        <Swiper
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper">
          {review.map((singlePerson) => {
            return (
              //  clients  sea about me
              <SwiperSlide
                key={singlePerson.id}
                className="bg-zinc-100 rounded-xl p-5 flex gap-5">
                <div className="flex gap-5 items-center">
                  <div className="flex justify-center items-center w-15 h-15 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img
                      src={singlePerson.image}
                      className="rounded-full w-15 h-15"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{singlePerson.name}</h5>
                    <p className="text-zinc-600">{singlePerson.profession}</p>
                    <span className="flex text-yellow-400 mt-2 text-xl gap-1">
                      {Array.from(
                        { length: singlePerson.stars },
                        (_, index) => (
                          <FaStar key={index} />
                        )
                      )}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{singlePerson.comment}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    stars: 3,
    comment:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    stars: 4,
    comment:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    stars: 2,
    comment:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    stars: 3,
    comment:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    stars: 4,
    comment:
      "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
