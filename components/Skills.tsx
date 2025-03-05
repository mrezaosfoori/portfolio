import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { skills } from "@/lib/data";

const Skills = () => {
  return (
    <div className="w-full my-[100px]">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

      <h2 className="font-bold text-xl text-neutral-200 mb-8" id="skills">
        Skills
      </h2>

      <div className="w-fit mx-auto ">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default Skills;
