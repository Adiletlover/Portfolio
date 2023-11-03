import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [active, setActive] = useState(1);

  const activeTab = (index) => {
    setActive(index);
  };
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Портфолио и Достижение</h2>
      <span className="section__subtitle">Мой личный путь</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => activeTab(1)}
            className={
              active === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }>
            <i className="uil uil-graduation-cap qualification__icon"></i> Образование
          </div>
          <div
            onClick={() => activeTab(2)}
            className={
              active === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Опыт работы
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              active === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developing</h3>
                <span className="qualification__subtitle">Geeks IT School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Backend Developing</h3>
                <span className="qualification__subtitle">ITC Bootcamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UX/UI Design</h3>
                <span className="qualification__subtitle">ITC Bootcamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              active === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Nexon Studio</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Настоящее время
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Web Developer</h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Настоящее время
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Intern Developer</h3>
                <span className="qualification__subtitle">GeeksPro</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 May. - 2023 August
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Backend Intern Developer</h3>
                <span className="qualification__subtitle">ITC Bootcamp</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
