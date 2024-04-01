import React, { useContext } from "react";
import { data } from "../context/Context";
import testimonialsstyle from "./Testimonials.module.css";
import { motion } from "framer-motion";

function Testimonials() {
  const { testimonials } = useContext(data);

  return (
    <div className={testimonialsstyle.main}>
      <div className="grid grid-cols-4 gap-2 w-[100%] pt-4 pb-4 z-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
        {testimonials.length > 0 &&
          testimonials.map((project) => {
            const { name, _id, image } = project;
            return (
              <div key={_id} className="flex flex-col items-center p-4">
                <img
                  src={image.url}
                  alt={image.public_id}
                  className="size-60 mb-6"
                />
                <div>{name}</div>
              </div>
            );
          })}
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
