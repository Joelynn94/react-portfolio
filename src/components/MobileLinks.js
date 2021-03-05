import React from 'react';
import { Link } from "react-router-dom";

const MobileLinks = () => {

  return (
    <div className="mobile-navigation">
      <ul className="mobile-ul">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/blog">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileLinks;
