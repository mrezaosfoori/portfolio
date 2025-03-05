"use client";

import Comments from "@/components/Comments";
import { ContactForm } from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { Spotlight } from "@/components/ui/Spotlight";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Home = () => {
  return (
    <TracingBeam className="w-screen">
       <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[90vh] w-[80vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    <main className="relative    min-h-screen min-w-full p-4 ">
      
          <Navbar/>
          <Hero />
          <Skills />
          <Comments />
          <ContactForm />
      
    </main>
    </TracingBeam>
  );
};

export default Home;
