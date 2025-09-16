import React from "react";
import resume from "../data/resumeData";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-8 lg:px-16 py-12 md:py-16 bg-[#020c15] relative">
      <motion.h3 className="text-2xl sm:text-3xl text-neon font-semibold mb-8 md:mb-10 enter">
        Selected Projects
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {resume.projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg border border-white/5 hover:border-neon transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h4 className="font-semibold text-lg text-white">{p.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
              </div>
              <span className="text-xs text-gray-500 break-words sm:whitespace-nowrap">
                {p.tech.join(" • ")}
              </span>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md border border-white/10 text-sm hover:border-neon transition-colors"
              >
                View on GitHub
              </a>
              <span className="text-xs text-gray-500 italic sm:ml-auto">
                {p.type || "Personal"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
