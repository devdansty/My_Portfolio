import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f19]/90 border-t border-white/10 mt-20">
      <div className="w-full px-4 sm:px-8 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Sameer Abid. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/devdansty"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sameerabid00"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sameer@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
