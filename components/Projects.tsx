"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { projects } from "@/lib/data";

export function Projects() {
  const cards = projects.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
     <h2 className="font-bold text-xl text-neutral-200 mb-8" id="skills">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



