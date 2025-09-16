import React from 'react'
import ProjectsGrid from '../components/ProjectsGrid'

export default function Projects(){
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-white mb-4">Projects</h2>
        <p className="text-gray-400 mb-6">A curated list of projects showcasing full-stack and mobile experience.</p>
      </div>

      <ProjectsGrid />
    </div>
  )
}
