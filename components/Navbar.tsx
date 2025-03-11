import React from "react";
import { ShimmerCard } from "./ui/ShimmerCard";
import { FloatingNav } from "./ui/floating-navbar.tsx";
import { navItems } from "@/lib/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" w-full flex justify-end">
     
        <ShimmerCard>
          <a href={"/osfoori_cv.pdf"} download>
          Download my CV
          </a>
        </ShimmerCard>
         <FloatingNav navItems={navItems} />
      
    </div>
  );
};

export default Navbar;
