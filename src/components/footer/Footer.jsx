import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Zhusupov</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Про меня</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Портфолио и Достижение</a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">Отзывы</a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/zhusupovcv/"
            className="footer__social-link"
            target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://t.me/Birinchi0001" className="footer__social-link" target="_blank">
            <i class="bx bxl-telegram"></i>
          </a>
          <a href="https://github.com/adiletLover" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className='footer__copy'>&#169; Zhusupov. Все права защищены</span>
      </div>
    </footer>
  );
};

export default Footer;
