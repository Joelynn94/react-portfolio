import React from 'react';

const BannerIcons = () => {
  return (
    <div className="banner-icons">
      <a href="https://github.com/Joelynn94" target="_blank" rel='noopener noreferrer'>
        <i className="fab fa-github-square banner-icon"></i>
      </a>
      <a href="https://www.linkedin.com/in/joseph-lynn/" target="_blank" rel='noopener noreferrer'>
        <i className="fab fa-linkedin banner-icon"></i>
      </a>
      <a href="./Dev_Joseph-Lynn_Resume.pdf" rel='noopener noreferrer' download>
        <i className="fas fa-file-pdf banner-icon unique-icon"></i>
      </a>
    </div>
  );
};

export default BannerIcons;
