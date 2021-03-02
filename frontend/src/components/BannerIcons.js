import React from 'react';
import { Link } from "react-router-dom";


const BannerIcons = () => {
  return (
    <div className="banner-icons">
      <Link to="https://github.com/Joelynn94" target="_blank" rel='noopener noreferrer'>
        <i className="fab fa-github-square banner-icon"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/joseph-lynn/" target="_blank" rel='noopener noreferrer'>
        <i className="fab fa-linkedin banner-icon"></i>
      </Link>
      <Link to="./joseph-lynn-resume.pdf" rel='noopener noreferrer' download>
        <i className="fas fa-file-pdf banner-icon unique-icon"></i>
      </Link>
    </div>
  );
};

export default BannerIcons;
