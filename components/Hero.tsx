import React from "react";
import { Spotlight } from "./ui/Spotlight";

function Hero() {
  return (
    <div className="w-full h-full bg-black-400  p-6 min-h-screen flex justify-center items-center">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[90vh] w-[80vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
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
