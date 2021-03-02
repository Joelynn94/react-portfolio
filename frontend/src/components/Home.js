import React from 'react';
import About from './About';
import Banner from './Banner';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main className="container">
        <About />
        <Skills />
      </main>
    </>
  );
};

export default Home;
