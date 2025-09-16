import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../data/resumeData"; // ✅ import resume data for email

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="w-full flex items-center justify-between px-12 py-4">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f6ff] to-[#7C5CFF] flex items-center justify-center text-black font-bold shadow-lg">
            SA
          </div>
          <div>
            <div className="font-semibold text-white">Sameer Abid</div>
            <div className="text-xs text-gray-400">Web Developer & Intern</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm ${
                  isActive ? "text-neon font-medium" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}

          {/* Contact Mail Button (Gmail compose) */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resume.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition flex items-center gap-2 text-sm"
          >
            ✉ Mail
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
