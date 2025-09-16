import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectsGrid from '../components/ProjectsGrid'
import Timeline from '../components/Timeline'
import FloatingParticles from '../components/FloatingParticles'

export default function Home() {
  return (
    <div className="relative">
      {/* floating background */}
      <FloatingParticles />

      <div className="relative z-10">
        <Hero />
        <Skills />
        <ProjectsGrid />
        <Timeline />
      </div>
    </div>
  )
}
