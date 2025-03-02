"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="relative   overflow-hidden  min-h-screen min-w-full p-4 ">
    
        <Navbar/>
        <Hero />
 
    </main>
  );
};

export default Home;
