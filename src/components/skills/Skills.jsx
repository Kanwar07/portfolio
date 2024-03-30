import React, { useContext } from "react";
import skillsstyle from "./Skills.module.css";
import { data } from "../context/Context";
import { motion } from "framer-motion";

function Skills() {
  const { skilldata } = useContext(data);
  return (
    <div className={skillsstyle.main}>
      <motion.div
        style={{
          fontSize: "200px",
          marginRight: "4rem",
          color: "rgb(0, 0, 0, 0.2)",
        }}
        className={skillsstyle.text}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Skills
      </motion.div>

      <div class="grid grid-cols-4 gap-2 w-[100%] pt-4 pb-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
        {Array.isArray(skilldata) &&
          skilldata.length > 0 &&
          skilldata.map((skill) => {
            const { name, _id, image } = skill;
            return (
              <motion.div
                key={_id}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.25 }}
              >
                <div className="flex flex-col items-center p-4 cursor-pointer">
                  <img src={image.url} alt={name} className="h-12 w-12" />
                  <div>{name}</div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default Skills;
