import React from 'react';

const PortfolioCard = ({ projects }) => {
  console.log(projects);
  console.log(projects[0].project_img.url);
  return (
    <>
      {projects.map((project) => (
        <div className="portfolio-card text-center">
          <div className="portfolio-img">
            <img src={`http://localhost:1337${project.project_img.url}`} alt={project.project_img.name} />
          </div>
          <div className="portfolio-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.skills}</p>
            <button className="btn btn-primary">
              <a href={project.live_link}>Live Link</a>
            </button>
            <button className="btn btn-secondary">
              <a href={project.github_link}>GitHub Link</a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioCard;
