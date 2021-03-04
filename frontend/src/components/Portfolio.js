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
      <a href="#portfolio">
        <h2>Portfolio</h2>
      </a>
      <div className="portfolio-wrapper">
        {projects && projects.map((project, index) => (
          <PortfolioCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
