import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [active, setActive] = useState(0);

  const activeTab = (index) => {
    setActive(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Услуги</h2>
      <span className="section__subtitle">Что я предлогаю</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Продукт <br /> Дизайнер
            </h3>
          </div>

          <span className="services__button" onClick={() => activeTab(1)}>
            Узнать больше <i class="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={active === 1 ? 'services__modal active-modal' : 'services__modal'}>
            <div className="services__modal-content">
              <i onClick={() => activeTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Продукт Дизайнер</h3>
              <p className="services__modal-description">
                Услуги с опытом работы более 1.5 лет. Обеспечение качественной работы клиентам и
                компаниям.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Разрабатываю пользовательский интерфейс.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Разработка веб-страницы.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Создаю Коммерческий сайты</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Верстка под ключ.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Сделаю дизайн для вашего сайта.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UX/UI <br /> Дизайнер
            </h3>
          </div>
          <span className="services__button" onClick={() => activeTab(2)}>
            Узнать больше <i class="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={active === 2 ? 'services__modal active-modal' : 'services__modal'}>
            <div className="services__modal-content">
              <i onClick={() => activeTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">UX/UI Designer</h3>
              <p className="services__modal-description">
                Услуги с опытом работы более 1.5 лет. Обеспечение качественной работы клиентам и
                компаниям.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Разрабатываю пользовательский интерфейс.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Разработка веб-страницы.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Создаю Коммерческий сайты</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Верстка под ключ.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Сделаю дизайн для вашего сайта.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Визуальный <br /> Дизайнер
            </h3>
          </div>
          <span className="services__button" onClick={() => activeTab(3)}>
            Узнать больше <i class="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={active === 3 ? 'services__modal active-modal' : 'services__modal'}>
            <div className="services__modal-content">
            <i onClick={()=>activeTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Визуальный Дизайнер</h3>
              <p className="services__modal-description">
                Услуги с опытом работы более 1.5 лет. Обеспечение качественной работы клиентам и
                компаниям.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Разрабатываю пользовательский интерфейс.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Разработка веб-страницы.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Создаю Коммерческий сайты</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Верстка под ключ.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Сделаю дизайн для вашего сайта.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
