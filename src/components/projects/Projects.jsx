import React, { useContext } from "react";
import { data } from "../context/Context";
import projectstyle from "./Projects.module.css";
import { motion } from "framer-motion";

function Projects() {
  const { projects } = useContext(data);

  return (
    <div className={projectstyle.main}>
      <motion.div className={projectstyle.carousel}>
        <motion.div drag="x" className={projectstyle.innercarousel}>
          {projects.length > 0 &&
            projects.map((project) => {
              const { title, _id, image } = project;
              return (
                <motion.div
                  key={_id}
                  className={projectstyle.item}
                  initial={{ x: 0 }}
                  animate={{ x: "-1525%" }}
                  transition={{
                    duration: 55,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <img src={image.url} alt={title} />
                  <div className="pt-6 text-center">{title}</div>
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
      <motion.div
        className={projectstyle.text}
        style={{
          fontSize: "20vw",
          color: "rgb(0, 0, 0, 0.2)",
        }}
      >
        Projects
      </motion.div>
    </div>
  );
}

export default Projects;
