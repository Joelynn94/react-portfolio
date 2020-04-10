import React from 'react'
import './styles.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-heading">Hi, I'm <span className="accent-text">Joseph Lynn</span></h1>
      <p className="hero-subheading">I am a web developer based in Cleveland Ohio who enjoys building web applications. See my projects on Github, professional profile on LinkedIn, or download my resume.</p>

      <div className="hero-social">
        <a 
          href="https://github.com/Joelynn94" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/joseph-lynn/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a 
          href="tel: +14405202267" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fal fa-phone-square-alt"></i>
        </a>
        <a 
          href="mailto: josephlynn94@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fal fa-envelope"></i>
        </a>
        <a 
          href="./assets/Joseph Lynn - Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link" 
          download>
          <i className="fal fa-file-pdf"></i>
        </a> 
      </div>
    </section>
  )
}


export default Hero