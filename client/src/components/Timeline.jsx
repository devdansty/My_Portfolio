import React from "react";
import resume from "../data/resumeData";

export default function Timeline() {
  return (
    <section className="w-full px-8 py-16 bg-[#020c15] relative">
      <h3 className="text-2xl text-neon font-semibold mb-10">
        Experience & Education
      </h3>

      <div className="relative border-l border-gray-700 pl-6 space-y-10">
        {/* Experience */}
        {resume.experience.map((e) => (
          <div key={e.title} className="relative">
            <span className="absolute -left-3 top-2 w-3 h-3 rounded-full bg-neon"></span>
            <div>
              <div className="text-sm font-semibold">
                {e.title} —{" "}
                <span className="text-gray-400 font-normal">{e.org}</span>
              </div>
              <div className="text-xs text-gray-400">{e.date}</div>
              <div className="text-sm text-gray-300 mt-2">{e.details}</div>
            </div>
          </div>
        ))}

        {/* Education */}
        {resume.education.map((ed) => (
          <div key={ed.title} className="relative">
            <span className="absolute -left-3 top-2 w-3 h-3 rounded-full bg-[#7C5CFF]"></span>
            <div>
              <div className="text-sm font-semibold">
                {ed.title} —{" "}
                <span className="text-gray-400 font-normal">{ed.org}</span>
              </div>
              <div className="text-xs text-gray-400">{ed.date}</div>
              {ed.details && (
                <div className="text-sm text-gray-300 mt-2">{ed.details}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
