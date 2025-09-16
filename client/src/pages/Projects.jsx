import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects() {
  return (
    <div className="pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl sm:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
          Projects
        </h2>
        <p className="text-gray-400 mb-6 sm:mb-8">
          A curated list of projects showcasing full-stack and mobile experience.
        </p>
      </div>

      <ProjectsGrid />
    </div>
  );
}
