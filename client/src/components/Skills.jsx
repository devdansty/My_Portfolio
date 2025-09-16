import React from "react";
import resume from "../data/resumeData";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

const iconMap = {
  JavaScript: <SiJavascript size={18} className="text-yellow-400" />,
  React: <SiReact size={18} className="text-cyan-400" />,
  Node: <SiNodedotjs size={18} className="text-green-500" />,
  MongoDB: <SiMongodb size={18} className="text-green-400" />,
};

export default function Skills() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-8 lg:px-16 py-12 md:py-16 bg-[#020c15] relative">
      <motion.h3 className="text-2xl sm:text-3xl text-neon font-semibold mb-8 md:mb-10 enter">
        Skills
      </motion.h3>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {["languages", "frontend", "backend", "databases"].map((category, idx) => {
          const items =
            category === "databases"
              ? [...resume.skills.databases, ...resume.skills.tools]
              : resume.skills[category];
          const title =
            category === "languages"
              ? "Languages"
              : category === "frontend"
              ? "Frontend"
              : category === "backend"
              ? "Backend"
              : "Databases & Tools";

          return (
            <div
              key={category}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg enter"
            >
              <div className="text-sm text-gray-400 mb-3">{title}</div>
              <div className="space-y-2 sm:space-y-3">
                {items.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-md bg-[#071528] grid place-items-center text-neon">
                      {iconMap[s] || s[0]}
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
