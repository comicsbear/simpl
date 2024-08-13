import React from 'react';

import defaultPhoto from '../assets/img/defaultPhoto.jpg';

import { Link } from 'react-router-dom';

function PersonCard({ obj, photo }) {
  return (
    <div className="candidate-card">
      <div className="candidate-card__info">
        <h3 className="candidate-card__name">{obj.name}</h3>
        <p className="candidate-card__job-title">{obj.vacancy}</p>
        <Link to="/profile" state={{ person: { obj } }}>
          <img
            className="candidate-card__img"
            src={obj.photo || defaultPhoto}
            alt="Candidate photo"
          />
        </Link>
        <p className="candidate-card__status">{obj.status}</p>
        <div className="candidate-card__contacts contacts">
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
      </div>

      {/* <label className="candidate-card__label">
        <input type="checkbox" className="candidate-card__input input-checkbox" name="select" />
        <span>Выбрать</span>
      </label> */}
    </div>
  );
}

export default PersonCard;
