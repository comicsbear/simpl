import React from 'react';
import classNames from 'classnames';

import recr1 from '../assets/img/recruter (1).jpg';
import defaultPhoto from '../assets/img/defaultPhoto.jpg';

import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';
import telegram from '../assets/img/telegram.png';
import viber from '../assets/img/viber.png';
import whatsapp from '../assets/img/whatsapp.png';

import { StatusPopup } from '../components';

function PersonProfile({ obj }) {
  return (
    <section className="main__resume resume">
      <div className="resume__row">
        <div className="resume__top-block">
          <img className="resume__photo" src={obj.photo || defaultPhoto} />
          <div className="resume__main-info">
            <p className="resume__name">{obj.name}</p>
            <p className="resume__vacancy">
              Возраст: {obj.age}, пол: {obj.sex.toLowerCase()}
            </p>

            <p className="resume__vacancy">{obj.vacancy}</p>
            <div className="resume__hiring">
              <StatusPopup
                current={obj.status}
                items={[
                  'новый',
                  'переписка',
                  'телефонное интервью',
                  'первичное собеседование с hr',
                  'техническое собеседование с заказчиком',
                  'повторное собеседование',
                  'тестовое задание',
                  'отказ кандидата',
                  'отправка оффера',
                  'выход на работу',
                  'адаптация',
                ]}
              />
              {/* <div className="resume__recruter">
                <h3 className="resume__title resume__title--small">Рекрутер</h3>
                <div className="resume__recruter-card recruter-card">
                  <img src={recr1} alt="recruter" className="recruter-card__photo" />
                  <p className="recruter-card__name">Горбунова Любовь</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="resume__bottom-block">
          <div className="resume__info">
            <h3 className="resume__title">Стек технологий</h3>
            <ul className="resume__skills skills">
              {obj.skills.split(', ').map((item, index) => (
                <li className="skills__item" key={`${item}_${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="resume__info">
            <h3 className="resume__title">Образование</h3>
            <ul className="resume__educational educational">
              {obj.education &&
                obj.education.map((item, index) => (
                  <li className="educational__item" key={`${item}_${index}`}>
                    <p className="educational__dates">{item.dates}</p>
                    <p className="educational__place">
                      {item.university}
                      <br />
                      {item.faculty}
                      <br />
                      {item.specialization}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
          <div className="resume__info">
            <h3 className="resume__title">Опыт работы</h3>
            <ul className="resume__experience experience">
              {obj.experience &&
                obj.experience.map((item, index) => (
                  <li className="experience__item" key={`${item}_${index}`}>
                    <p className="experience__dates">{item.dates}</p>
                    <div className="experience__inf">
                      <p className="experience__company">{item.company}</p>
                      <p className="experience__vacancy">{item.position}</p>
                      <p className="experience__descr">{item.description}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="resume__row">
        <div className="resume__contacts">
          <h3 className="resume__title">Контакты</h3>
          <div className="contacts">
            <div className="contacts__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-building-2"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
              г. {obj.city}
            </div>
            <a className="contacts__item" href={`tel:${obj.phone}`} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p>{obj.phone}</p>
            </a>
            <a className="contacts__item" href={`mailto:${obj.email}`} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <p>{obj.email}</p>
            </a>
          </div>
          <ul className="resume__social social">
            <li
              className={classNames('social__item', {
                desabled: !obj.socials.github,
              })}
            >
              <a href={obj.socials.github} className="social__link" target="_blank">
                <img src={github} alt="" />
              </a>
            </li>
            <li
              className={classNames('social__item', {
                desabled: !obj.socials.linkedin,
              })}
            >
              <a href={obj.socials.linkedin} className="social__link" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li
              className={classNames('social__item', {
                desabled: !obj.socials.whatsapp,
              })}
            >
              <a href={obj.socials.whatsapp} className="social__link" target="_blank">
                <img src={whatsapp} alt="" />
              </a>
            </li>
            <li
              className={classNames('social__item', {
                desabled: !obj.socials.telegram,
              })}
            >
              <a href={obj.socials.telegram} className="social__link" target="_blank">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li
              className={classNames('social__item', {
                desabled: !obj.socials.viber,
              })}
            >
              <a href={obj.socials.viber} className="social__link" target="_blank">
                <img src={viber} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="resume__actions">
          <h3 className="resume__title">Действия</h3>
          <button className="button button--outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
            Удалить
          </button>
          {/* <button className="button button--outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-input"
            >
              <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M2 15h10" />
              <path d="m9 18 3-3-3-3" />
            </svg>
            Выгрузить отчёт
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default PersonProfile;
