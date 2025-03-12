import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import images from "@/lib/images";
import Popup from 'reactjs-popup';
import HireMeButton from "./HireMeButton";

function Hero() {
  return (
    <div className="w-full h-full  p-6 min-h-screen flex justify-center items-center">
      <div className="h-[50rem] w-full   dark:bg-grid-white/[0.2] bg-grid-blue-200/[0.3] relative flex items-center justify-center ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)]"></div>

        <div className=" flex   w-[90%]  ">
          <section className="flex-3 flex flex-col  opacity-95 ">
            <p className="text-[20px] text-white">Welcome</p>
            <TextGenerateEffect
              words="I am a web designer and front-end deveolper"
              className="text-[32px]  line-clamp-1"
            />

            <p className="text-slate-100 text-[18px] mt-8 max-w-[70%] leading-2 tracking-tight ">
              Frontend developer with 4+ years of experience building smooth,
              interactive apps using React and React Native. I turn ideas into
              pixel-perfect designs that work fast and feel great. Let’s create
              something users love and businesses rely on!
            </p>
            <div className="flex gap-4 mt-auto">
              <button className="border-[4px] border-blue-400 text-blue-400 px-6 py-3 rounded-xl text-[18px] hover:bg-blue-400 hover:text-white transition">
                About Me
              </button>
           <HireMeButton/>
            </div>
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
