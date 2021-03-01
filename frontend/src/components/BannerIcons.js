import React from 'react';
import { Link } from "react-router-dom";


const BannerIcons = () => {
  return (
    <div className="banner-icons">
      <Link to="https://github.com/Joelynn94" target="_blank" rel='noopener noreferrer' className="banner-icon">
        <i className="fab fa-github-square"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/joseph-lynn/" target="_blank" rel='noopener noreferrer' className="banner-icon">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link to="./joseph-lynn-resume.pdf" rel='noopener noreferrer' className="banner-icon" download>
        <i className="fas fa-file-pdf"></i>
      </Link>
    </div>
  );
};

export default BannerIcons;
