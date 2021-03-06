import React from 'react';

const Skills = () => {
  return (
    <section id="skills" >
      <a href="#skills">
        <h2>Tech Skills</h2>
      </a>
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
        <img className="text-center" src="./images/mysql.png" alt="" />
        <img src="./images/mongodb.png" alt="" />
        <img src="./images/postgresql.png" alt="" />
      </div>
      <h3>Misc. Technologies</h3>
      <div className="text-center">
        <i className="fab fa-git"></i>
        <i className="fab fa-npm"></i>
        <i className="fab fa-gulp"></i>
        <img src="./images/webpack.png" alt="" />
      </div>
    </section>
  );
};

export default Skills;
