import React from "react";

import { expriences } from "@/lib/data";
import  ExperienceCard  from "./ui/ExpCard";

const Exprienceses = () => {
  return (
    <div className="w-full my-[100px]">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

      <h2 className="font-bold text-xl text-neutral-200 mb-8" id="skills">
      Exprienceses
      </h2>

      <div className="w-full mx-auto  flex justify-center gap-8  p-2  ">
       { expriences.map((item,idx)=><ExperienceCard key={idx} experience={item} />)}
      </div>
    </div>
  );
};

export default Exprienceses;
