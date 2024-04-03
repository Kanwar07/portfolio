import React, { useContext } from "react";
import { data } from "../context/Context";
import projectstyle from "./Projects.module.css";
import { motion } from "framer-motion";

function Projects() {
  const { projects } = useContext(data);

  return (
    <div className={projectstyle.main}>
      <motion.div className={projectstyle.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 500, left: -6350 }}
          initial={{ x: 100 }}
          animate={{ x: "-500%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.2,
          }}
          className={projectstyle.innercarousel}
        >
          {projects.length > 0 &&
            projects.map((project) => {
              const { title, _id, image } = project;
              return (
                <motion.div
                  key={_id}
                  className={projectstyle.item}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
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
