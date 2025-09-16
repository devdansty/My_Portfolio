import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../data/resumeData";

export default function Hero() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-16 flex flex-col md:flex-row items-start gap-6 md:gap-10">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          <span className="text-neon">Innovating</span> at the intersection of
          code and creativity
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-300 max-w-full sm:max-w-lg md:max-w-3xl">
          {resume.summary}
        </p>

        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00f6ff]/20 to-[#7C5CFF]/20 border border-white/6 hover:scale-[1.02] transition-transform text-center"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-white/6 hover:scale-[1.02] transition-transform text-center"
          >
            Contact Me
          </Link>
        </div>

        {/* Quick Info */}
        <div className="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-full sm:max-w-md">
          <div className="card p-4 sm:p-5 rounded-lg">
            <div className="text-xs text-gray-400">Education</div>
            <div className="text-sm font-semibold">BSc Computer Science</div>
            <div className="text-xs text-gray-500">{resume.education[0].org}</div>
          </div>
          <div className="card p-4 sm:p-5 rounded-lg">
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
  className="w-full sm:w-[380px] md:w-[420px] mt-14 sm:mt-6 md:mt-0 px-0 sm:px-0 md:px-0"
>
  <div className="card p-6 sm:p-8 rounded-2xl shadow-neon md:mt-0">
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[#0b1220] to-[#111827] flex items-center justify-center text-2xl font-bold text-neon">
        SA
      </div>
      <div>
        <div className="font-semibold text-lg">{resume.name}</div>
        <div className="text-sm text-gray-400">{resume.title}</div>
        <div className="text-xs text-gray-500 mt-1">{resume.location}</div>
      </div>
    </div>

    <div className="mt-4 sm:mt-6 text-sm text-gray-300">
      Passionate about building reliable and elegant web applications.
      Currently exploring full-stack engineering and cloud integrations.
    </div>

    <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3">
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resume.contact.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-md border border-white/6 text-sm text-center"
      >
        Email
      </a>

      <a
        href="/Sameer_Abid_Resume.pdf"
        download="Sameer_Abid_Resume.pdf"
        className="px-4 py-2 rounded-md border border-white/6 text-sm text-center"
      >
        Download CV
      </a>
    </div>
  </div>
</motion.div>

    </section>
  );
}
