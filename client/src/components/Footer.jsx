import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f19]/90 border-t border-white/10 mt-20">
      <div className="w-full px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Sameer Abid. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sameer@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
