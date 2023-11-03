import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Опыт работы</h3>
            <p className='about__subtitle'>1.5 Года</p>
        </div>
        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>

            <h3 className="about__title">Завершено Проектов</h3>
            <p className='about__subtitle'>+10</p>
        </div>
        <div className="about__box">
        <i class='bx bx-support about__icon'></i>

            <h3 className="about__title">Поддержка</h3>
            <p className='about__subtitle'>Онлайн 24/7</p>
        </div>
    </div>
  )
}

export default Info