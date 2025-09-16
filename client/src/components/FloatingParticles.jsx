import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function FloatingParticles() {
  const init = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        detectRetina: true,
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#00f6ff" },
          opacity: { value: 0.2 },
          size: { value: { min: 2, max: 4 } },
          move: { enable: true, speed: 0.6 },
          links: {
            enable: true,
            color: "#7C5CFF",
            opacity: 0.1,
            distance: 120, // reduced for mobile clarity
          },
        },
        responsive: [
          {
            maxWidth: 640, // small screens
            options: {
              particles: {
                number: { value: 30 }, // reduce number
                links: { distance: 80 }, // shorter link distance
                size: { value: { min: 1, max: 3 } }, // smaller particles
              },
            },
          },
        ],
      }}
    />
  );
}
