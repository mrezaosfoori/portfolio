import React from "react";
import { Meteors } from "../ui/meteors";
import images from "@/lib/images";
import Image from "next/image";

const ExperienceCard = ({ experience }:any) => {
  return (
   
      <div className="w-full relative max-w-md">
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.70] rounded-full blur-3xl" /> */}
        <div className="relative  bg-black border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col ">
          {/* Header with Logo and Title */}
          <div className="flex items-center mb-4 relative z-50">
            
              <Image
                src={images.job}
                alt="Co"
                className="h-20 w-20 mr-2 rounded-md shadow-xl bg-black-200"
              />
          
           <div className="h-full  flex flex-col justify-end gap-0 ">
             <h1 className="font-bold text-xl text-white">
               {experience.title}
             </h1>
             <p className="font-bold text-md text-slate-400  ">{experience.position}</p>
           </div>
          </div>

          {/* Range Time */}
          <span className="text-sm text-slate-300 mb-2 relative z-50">
            {experience.rangeTime}
          </span>

          {/* Description */}
          <p className="font-normal text-base text-slate-400  relative z-50 mb-8">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4 relative z-50 mt-auto ">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs text-gray-300 border border-gray-500 rounded px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Explore Button */}
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 relative z-50">
            Explore
          </button>

          {/* Meteor Effect */}
          <Meteors number={5} />
        </div>
      </div>
    
  );
};

export default ExperienceCard;
