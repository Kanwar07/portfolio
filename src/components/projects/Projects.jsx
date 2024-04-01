import React, { useContext } from "react";
import { data } from "../context/Context";
import projectstyle from "./Projects.module.css";

function Projects() {
  const { projects } = useContext(data);

  return (
    <div className={projectstyle.main}>
      <div className="grid grid-cols-4 gap-2 w-[100%] pt-4 pb-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3">
        {projects.length > 0 &&
          projects.map((project) => {
            const { title, _id, image } = project;
            return (
              <div key={_id} className="flex flex-col items-center p-4">
                <img src={image.url} alt={title} className="mb-6" />
                <div>{title}</div>
              </div>
            );
          })}
      </div>
      <div
        className={projectstyle.text}
        style={{
          fontSize: "12.5vw",
          color: "rgb(0, 0, 0, 0.2)",
        }}
      >
        Projects
      </div>
    </div>
  );
}

export default Projects;
