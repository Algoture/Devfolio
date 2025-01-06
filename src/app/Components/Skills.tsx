import React from "react";
import { skill } from "../utils/data";

const Skills = () => {
  return (
    <section className="md:w-1/2 p-2 flex-col gap-4 mt-4">
      <h1 className=" dark:text-white text-xl  font-bold text-black text-left">Skills</h1>
      <div className=" flex flex-wrap gap-2 items-center ">
        {skill.slice(0, 10).map((item) => {
          return (
            <button className="skillsbtn" key={item.id}>
              {item.skill}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
