import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <Skills />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
