import React from "react";
import resume from "../data/resumeData";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
  return (
    <section className="w-full px-8 py-16 bg-[#020c15] relative">
      <motion.h3 className="text-2xl text-neon font-semibold mb-10 enter">
        Selected Projects
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8">
        {resume.projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg border border-white/5 hover:border-neon transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg text-white">{p.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{p.desc}</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {p.tech.join(" • ")}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md border border-white/10 text-sm hover:border-neon transition-colors"
              >
                View on GitHub
              </a>
              <span className="ml-auto text-xs text-gray-500 italic">
                {p.type || "Personal"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
