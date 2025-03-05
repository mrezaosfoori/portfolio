import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { ShimmerCard } from "./ui/ShimmerCard";

function Hero() {
  return (
    <div className="w-full h-full  p-6 min-h-screen flex justify-center items-center">
      <div className="h-[50rem] w-full   dark:bg-grid-white/[0.2] bg-grid-blue-200/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-500 py-8">
          Backgrounds
        </p>
      </div>
    </div>
  );
}

export default Hero;
