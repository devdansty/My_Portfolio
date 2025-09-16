import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import Timeline from "../components/Timeline";
import FloatingParticles from "../components/FloatingParticles";

export default function Home() {
  return (
    <div className="relative">
      {/* floating background */}
      <FloatingParticles />

      <div className="relative z-10">
        {/* add responsive top padding for small screens */}
        <div className="pt-20 sm:pt-24 md:pt-32">
          <Hero />
        </div>

        <div className="px-4 sm:px-8 md:px-12">
          <Skills />
          <ProjectsGrid />
          <Timeline />
        </div>
      </div>
    </div>
  );
}
