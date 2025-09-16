import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles"; // ✅ default import

export default function FloatingParticles() {
  const init = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // ✅ always behind
        background: { color: "transparent" },
        detectRetina: true,
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#00f6ff" },
          opacity: { value: 0.2 }, // make them more visible
          size: { value: { min: 2, max: 4 } },
          move: { enable: true, speed: 0.6 },
          links: { enable: true, color: "#7C5CFF", opacity: 0.1, distance: 150 },
        },
      }}
    />
  );
}
