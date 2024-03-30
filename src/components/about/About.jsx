import React, { useContext } from "react";
import { data } from "../context/Context";
import aboutstyle from "./About.module.css";
import { motion } from "framer-motion";

function About() {
  const { aboutdata } = useContext(data);

  return (
    <div className={aboutstyle.main}>
      <motion.div
        className={aboutstyle.image}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {aboutdata.avatar && (
          <img
            src={aboutdata.avatar.url}
            alt={aboutdata.avatar.public_id}
            style={{
              borderRadius: "80px",
            }}
          />
        )}
      </motion.div>
      <motion.div
        className={aboutstyle.info}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          style={{ fontSize: "36px" }}
        >
          {aboutdata.title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ fontSize: "larger" }}
        >
          {aboutdata.subTitle}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          style={{ fontSize: "larger" }}
        >
          {aboutdata.description}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          style={{
            fontSize: "200px",
            color: "rgb(0, 0, 0, 0.2)",
          }}
        >
          About
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
