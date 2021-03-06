import React from 'react';

const PortfolioCard = ({ title, image, desc, skills, link, github }) => {

  return (
    <>
      <div className="portfolio-card text-center">
        <div className="portfolio-img">
          <img src={image} alt={title} />
        </div>
        <div className="portfolio-body">
          <h3>{title}</h3>
          <p>{desc}</p>
          <p><strong>Built with:</strong> {skills}</p>
          <div className="portfolio-cta">
            <a className="link-primary" href={link} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">Live Link</button>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <button className="btn btn-tertiary">GitHub Link</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
