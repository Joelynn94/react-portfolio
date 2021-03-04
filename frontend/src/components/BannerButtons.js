import React from 'react';
import { Link } from "react-router-dom";

const BannerButtons = () => {
  return (
    <div className="banner-buttons">
      <Link to="/">
        <button className="btn btn-primary">Explore Portfolio</button>
      </Link>
      <Link to="/">
        <button className="btn btn-secondary">Contact Me</button>
      </Link>
    </div>
  );
};

export default BannerButtons;
