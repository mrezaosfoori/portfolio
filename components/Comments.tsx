import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { comments } from "@/lib/data";

const Comments = () => {
  return (
    <div className="w-full my-[100px]">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

      <h2 className="font-bold text-xl text-neutral-200 mb-8" id="skills">
        Comments
      </h2>
     <div className="w-fit mx-auto ">
         <InfiniteMovingCards items={comments} speed="slow" />
     </div>
    </div>
  );
};

export default Comments;
