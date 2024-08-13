import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { PersonProfile } from '../components/index.js';

function Profile() {
  const location = useLocation();
  const person = location.state.person.obj;

  return (
    <main className="main">
      <div className="main__container container">
        <Link to="/teamwork-swift-ferret/" className="main__button-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>назад к списку резюме</span>
        </Link>

        <PersonProfile obj={person} />
      </div>
    </main>
  );
}

export default Profile;
