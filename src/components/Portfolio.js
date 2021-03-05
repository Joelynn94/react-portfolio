import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';
import Spinner from './Spinner';

const Portfolio = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:1337/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      });
  }, []);


  return (
    <section id="portfolio">
      <a href="#portfolio">
        <h2>Portfolio</h2>
      </a>
      {loading && <Spinner />}
      <div className="portfolio-wrapper">
        {projects && projects.map((project, index) => (
          <PortfolioCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
