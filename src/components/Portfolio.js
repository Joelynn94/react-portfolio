import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioCard from './PortfolioCard';
import Spinner from './Spinner';

const Portfolio = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://www.josephlynn.com/projects.json")
      .then(response => {
        console.log(response.data);
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
        {projects && projects.map((project) => (
          <PortfolioCard title={project.title} image={project.image} desc={project.desc} skills={project.skills} link={project.link} github={project.link} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
