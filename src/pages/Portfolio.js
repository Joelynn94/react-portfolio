import React from 'react'
import Project from '../components/Project'
import images from '../components/images'

function Portfolio() {
  return (
    <section className="projects">
      <Project
        name={images[0].name}
        image={images[0].image}
      />
    </section>
  )
}

export default Portfolio
