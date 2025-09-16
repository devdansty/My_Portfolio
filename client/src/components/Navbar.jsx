import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../data/resumeData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 md:py-4">
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#00f6ff] to-[#7C5CFF] flex items-center justify-center text-black font-bold shadow-lg">
            SA
          </div>
          <div>
            <div className="font-semibold text-white text-sm sm:text-base">
              Sameer Abid
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              Web Developer & Intern
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-neon font-medium"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}

          {/* Contact Mail Button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resume.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition flex items-center gap-2 text-sm"
          >
            ✉ Mail
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-[#0b0f19]/95 border-t border-white/10">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-neon font-medium"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resume.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition flex items-center gap-2 text-sm"
          >
            ✉ Mail
          </a>
        </div>
      )}
    </motion.nav>
  );
}
