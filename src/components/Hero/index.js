import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Hero() {
  return (
    <section className='hero'>
      <h1 className='hero-heading'>
        Hi, I'm <span className='accent-text'>Joseph Lynn</span>
      </h1>
      <p className='hero-subheading'>
        I am a web developer based in Cleveland, Ohio who enjoys building web
        applications. See my projects on Github, professional profile on
        LinkedIn, or download my resume.
      </p>

      <div className='hero-social'>
        <a
          href='https://github.com/Joelynn94'
          target='_blank'
          rel='noopener noreferrer'
          className='hero-social_link'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/joseph-lynn/'
          target='_blank'
          rel='noopener noreferrer'
          className='hero-social_link'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a
          href='mailto: josephlynn94@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hero-social_link'
        >
          <i className='fal fa-envelope'></i>
        </a>
        <a
          href='./Joseph-Lynn-Resume-2020.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='hero-social_link'
          download
        >
          <i className='fal fa-file-pdf'></i>
        </a>
      </div>

      <div className='hero-buttons'>
        <Link className='' to='/portfolio'>
          <button className='btn btn-primary hero-btn'>View Portfolio</button>
        </Link>

        <Link className='' to='/contact'>
          <button className='btn btn-secondary hero-btn'>Contact Me</button>
        </Link>
      </div>
    </section>
  )
}

export default Hero
