import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/projects')
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      });
  }, []);


  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      {projects && <PortfolioCard projects={projects} />}
    </section>
  );
};

export default Portfolio;
