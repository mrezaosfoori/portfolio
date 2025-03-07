import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { ShimmerCard } from "./ui/ShimmerCard";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import images from "@/lib/images";

function Hero() {
  return (
    <div className="w-full h-full  p-6 min-h-screen flex justify-center items-center">
      <div className="h-[50rem] w-full   dark:bg-grid-white/[0.2] bg-grid-blue-200/[0.3] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)]"></div>

        <div className=" flex   w-[90%]  ">
          <section className="flex-3  opacity-95 z-[9999]">
            <p className="text-[20px] text-white">Welcome</p>
            <TextGenerateEffect
              words="I am a web designer and front-end deveolper"
              className="text-[32px]  line-clamp-1"
            />

            <p className="text-white text-[18px] mt-8 max-w-[60%] ">
              I’m Tanvir, a creative Product Designer. I’ve been helping
              businesses to solve their problems with my design for 2 years.
            </p>
          </section>

          {/* image */}
          <section className="flex-2 flex items-center justify-center">
            <div className="w-[400px] h-[400px] bg-blue-200 relative z-0">
              <Image
                src={images.HeroImage}
                alt="hero image"
                className="absolute object-cover w-full h-[140%] bottom-0 z-30"
              />
              <div className="w-[400px] h-[400px] border-8 border-black absolute top-[50px] right-[35px] z-15 "></div>
              <div className="w-[400px] h-[400px] border-8 border-blue-200 absolute top-[55px] right-[40px] z-10 "></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
