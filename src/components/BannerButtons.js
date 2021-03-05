import React from 'react';

const BannerButtons = () => {
  return (
    <div className="banner-buttons">
      <a href="#portfolio">
        <button className="btn btn-primary">Explore Portfolio</button>
      </a>
      <a href="#contact">
        <button className="btn btn-secondary">Contact Me</button>
      </a>
    </div>
  );
};

export default BannerButtons;
