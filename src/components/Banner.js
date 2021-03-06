import React from 'react';
import BannerButtons from './BannerButtons';
import BannerIcons from './BannerIcons';

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-inner">
        <h1 className="banner-heading">Front-end Web Developer</h1>
        <p className="banner-subheading text-center">A web developer based in Tampa, Florida who enjoys building web applications with a great user experience. View my projects on GitHub, professional profile on LinkedIn, or download my resume.</p>
        <BannerIcons />
        <BannerButtons />
      </div>
    </section>
  );
};

export default Banner;
