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
    <section className="w-full px-8 py-16 bg-[#020c15] relative">
      <motion.h3 className="text-2xl text-neon font-semibold mb-10 enter">
        Skills
      </motion.h3>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Languages */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg enter">
          <div className="text-sm text-gray-400 mb-3">Languages</div>
          <div className="space-y-3">
            {resume.skills.languages.map((l) => (
              <div key={l} className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-md bg-[#071528] grid place-items-center text-neon">
                  {iconMap[l] || l[0]}
                </div>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg enter">
          <div className="text-sm text-gray-400 mb-3">Frontend</div>
          <div className="space-y-3">
            {resume.skills.frontend.map((s) => (
              <div key={s} className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-md bg-[#071528] grid place-items-center text-neon">
                  {iconMap[s] || s[0]}
                </div>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg enter">
          <div className="text-sm text-gray-400 mb-3">Backend</div>
          <div className="space-y-3">
            {resume.skills.backend.map((s) => (
              <div key={s} className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-md bg-[#071528] grid place-items-center text-neon">
                  {iconMap[s] || s[0]}
                </div>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases & Tools */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg enter">
          <div className="text-sm text-gray-400 mb-3">Databases & Tools</div>
          <div className="space-y-3">
            {[...resume.skills.databases, ...resume.skills.tools].map((s) => (
              <div key={s} className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-md bg-[#071528] grid place-items-center text-neon">
                  {iconMap[s] || s[0]}
                </div>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
