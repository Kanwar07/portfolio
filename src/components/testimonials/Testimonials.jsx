import React, { useContext } from "react";
import { data } from "../context/Context";
import testimonialsstyle from "./Testimonials.module.css";
import { motion } from "framer-motion";
import TestimonialsCard from "../card/TestimonialsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const { testimonials } = useContext(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-screen m-auto bg-[#ddd0c8] pt-16 pr-48 pb-16 pl-48">
      <div className="pt-20">
        <Slider {...settings}>
          {testimonials.length > 0 &&
            testimonials.map((project) => {
              const { name, _id, image, position, review } = project;
              return (
                <TestimonialsCard {...{ name, _id, image, position, review }} />
              );
            })}
        </Slider>
      </div>
      <motion.div
        className={testimonialsstyle.text}
        initial={{ x: 0 }}
        animate={{ x: "-110%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
        style={{
          fontSize: "16vw",
          color: "rgb(0, 0, 0, 0.2)",
        }}
      >
        Testimonials
      </motion.div>
    </div>
  );
}

export default Testimonials;
