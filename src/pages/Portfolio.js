import React from 'react'
import Project from '../components/Project'
import projects from '../projects.json'

function Portfolio() {
  return (
    <section className="projects">
      <div className="grid-container projects-container">
        <Project 
          title={projects[0].title}
          image={projects[0].image}
          desc={projects[0].desc}
          skills={projects[0].skills}
          link={projects[0].link}
          github={projects[0].github}
        />
        <Project 
          title={projects[1].title}
          image={projects[1].image}
          desc={projects[1].desc}
          skills={projects[1].skills}
          link={projects[1].link}
          github={projects[1].github}
        />
        <Project 
          title={projects[2].title}
          image={projects[2].image}
          desc={projects[2].desc}
          skills={projects[2].skills}
          link={projects[2].link}
          github={projects[2].github}
        />
        <Project 
          title={projects[3].title}
          image={projects[3].image}
          desc={projects[3].desc}
          skills={projects[3].skills}
          link={projects[3].link}
          github={projects[3].github}
        />
        <Project 
          title={projects[4].title}
          image={projects[4].image}
          desc={projects[4].desc}
          skills={projects[4].skills}
          link={projects[4].link}
          github={projects[4].github}
        />
        <Project 
          title={projects[5].title}
          image={projects[5].image}
          desc={projects[5].desc}
          skills={projects[5].skills}
          link={projects[5].link}
          github={projects[5].github}
        />
      </div>
    </section>
  )
}

export default Portfolio
