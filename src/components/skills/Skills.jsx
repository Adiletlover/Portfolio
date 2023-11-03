import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import UxUiDesign from './UxUiDesign';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Навыки</h2>
      <span className="section__subtitle">Мой личный опыт</span>
      <div className="skills__container container grid">
        <Frontend />
        <UxUiDesign />
      </div>
    </section>
  );
};

export default Skills;
