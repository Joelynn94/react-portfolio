import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Technologies I've worked with</h2>
        <h3>Front-end Technologies</h3>
        <div className="text-center">
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-sass"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-react"></i>
        </div>
        <h3>Back-end Technologies</h3>
        <div className="text-center">
          <i className="fab fa-node"></i>
          <img src="./images/mysql.png" alt="" />
          <img src="./images/mongodb.png" alt="" />
          <img src="./images/postgresql.png" alt="" />
        </div>
        <h3>Misc. Technologies</h3>
        <div className="text-center">
          <i class="fab fa-git"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-gulp"></i>
          <img src="./images/webpack.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
