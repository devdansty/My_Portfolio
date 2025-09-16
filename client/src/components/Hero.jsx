import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../data/resumeData";

export default function Hero() {
  return (
    <section className="w-full px-12 pt-32 pb-20 flex flex-col md:flex-row items-start gap-12">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
          <span className="text-neon">Innovating</span> at the intersection of
          code and creativity
        </h1>
        <p className="mt-6 text-gray-300 max-w-3xl">{resume.summary}</p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00f6ff]/20 to-[#7C5CFF]/20 border border-white/6 hover:scale-[1.02] transition-transform"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-white/6 hover:scale-[1.02] transition-transform"
          >
            Contact Me
          </Link>
        </div>

        {/* Quick Info */}
        <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
          <div className="card p-5 rounded-lg">
            <div className="text-xs text-gray-400">Education</div>
            <div className="text-sm font-semibold">BSc Computer Science</div>
            <div className="text-xs text-gray-500">{resume.education[0].org}</div>
          </div>
          <div className="card p-5 rounded-lg">
            <div className="text-xs text-gray-400">Experience</div>
            <div className="text-sm font-semibold">Remote Part-Time Web Dev</div>
            <div className="text-xs text-gray-500">{resume.experience[0].org}</div>
          </div>
        </div>
      </motion.div>

      {/* Right Side Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[420px]"
      >
        <div className="card p-8 rounded-2xl shadow-neon">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#0b1220] to-[#111827] flex items-center justify-center text-2xl font-bold text-neon">
              SA
            </div>
            <div>
              <div className="font-semibold text-lg">{resume.name}</div>
              <div className="text-sm text-gray-400">{resume.title}</div>
              <div className="text-xs text-gray-500 mt-1">{resume.location}</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-300">
            Passionate about building reliable and elegant web applications.
            Currently exploring full-stack engineering and cloud integrations.
          </div>

          <div className="mt-8 flex gap-3">
            {/* Email button opens Gmail */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resume.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-white/6 text-sm"
            >
              Email
            </a>

            {/* Download CV button */}
            <a
              href="/Sameer_Abid_Resume.pdf"
              download="Sameer_Abid_Resume.pdf"
              className="px-4 py-2 rounded-md border border-white/6 text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
