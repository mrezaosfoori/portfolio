import React from "react";
import { ShimmerCard } from "./ui/ShimmerCard";
import { FloatingNav } from "./ui/floating-navbar.tsx";
import { navItems } from "@/lib/data";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-end">
     
        <ShimmerCard>Download my CV</ShimmerCard>
         <FloatingNav navItems={navItems} />
      
    </div>
  );
};

export default Navbar;
