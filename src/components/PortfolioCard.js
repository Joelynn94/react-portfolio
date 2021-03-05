import React from 'react';

const PortfolioCard = ({ project }) => {
  console.log(project);

  return (
    <>
      <div className="portfolio-card text-center">
        <div className="portfolio-img">
          <img src={`https://sparky-portfolio-backend.herokuapp.com${project.project_img.url}`} alt={project.project_img.name} />
        </div>
        <div className="portfolio-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Built with:</strong> {project.skills}</p>
          <div className="portfolio-cta">
            <a className="link-primary" href={project.live_link} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">Live Link</button>
            </a>
            <a href={project.github_link} target="_blank" rel="noreferrer">
              <button className="btn btn-tertiary">GitHub Link</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
