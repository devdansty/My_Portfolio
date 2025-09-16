import React from "react";
import resume from "../data/resumeData";

export default function About() {
  return (
    <section className="w-full px-8 py-20 bg-[#020c15] relative">
      {/* Heading with extra top margin */}
      <h2 className="text-3xl font-extrabold text-neon mb-8 mt-16">
        About Me
      </h2>

      {/* Full width summary text */}
      <p className="text-gray-300 w-full leading-relaxed text-justify">
        {resume.summary}
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg border border-white/5">
          <h4 className="text-sm text-gray-400 mb-3">Certifications</h4>
          <ul className="text-sm space-y-2 list-disc list-inside text-gray-300">
            {resume.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Interests */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#04121d] to-[#0a1c2f] shadow-lg border border-white/5">
          <h4 className="text-sm text-gray-400 mb-3">Interests</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Full-stack development, distributed systems, cloud integrations,
            networking, and applying ML to practical problems.
          </p>
        </div>
      </div>
    </section>
  );
}
