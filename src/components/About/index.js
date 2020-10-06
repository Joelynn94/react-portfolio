import React from 'react'
import './styles.css'

function About() {
  return (
    <section id='about' className='about'>
      <h1 className='about-heading'>ABOUT ME.</h1>
      <div className='container'>
        <div className='grid-container'>
          <p className='about-para'>
            Known for being able to bring ideas together to build out the user
            interface of an application. With every project, my aim is to give
            users a great experience from the user interface to the backend -
            ensuring everything works as intended.
          </p>

          <p className='about-para'>
            I was drawn to the technology field at an early age. I find it
            incredible that with programming knowledge, you can develop
            applications for anything you can think of. Building applications
            present a good challenge to work at and accomplish. I want to use
            development to help people, by creating solutions to business
            problems that exceed their expectations.
          </p>

          <button className='btn btn-primary about-btn'>
            <a
              href='./joseph-lynn-resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              <i className='fal fa-file-pdf'></i> Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
