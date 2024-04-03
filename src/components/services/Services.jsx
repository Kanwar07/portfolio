import React, { useContext } from "react";
import { data } from "../context/Context";
import servicesstyle from "./Services.module.css";
import { motion } from "framer-motion";

function Services() {
  const { services } = useContext(data);
  return (
    <div className={servicesstyle.main}>
      <motion.div className={servicesstyle.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 1000, left: -1000 }}
          className={servicesstyle.innercarousel}
        >
          {services.length > 0 &&
            services.map((service) => {
              const { name, charge, desc, _id, image } = service;
              return (
                <motion.div
                  key={_id}
                  className={servicesstyle.item}
                  animate={{ x: 0 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                >
                  <img src={image.url} alt={name} className="size-80" />
                  <div className="pt-6 flex justify-around">
                    <div>{name}</div>
                    <div>{charge}</div>
                  </div>
                  <div className="pt-6 text-center">{desc}</div>
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
      <motion.div
        className={servicesstyle.text}
        style={{
          fontSize: "20vw",
          color: "rgb(0, 0, 0, 0.2)",
        }}
      >
        Services
      </motion.div>
    </div>
  );
}

export default Services;
