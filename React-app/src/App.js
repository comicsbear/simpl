import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './assets/css/App.css';

import { Header } from './components/index.js';

import { Home, Profile, SignIn, Upload } from './pages/index.js';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        {/* <Route path="/teamwork-swift-ferret/" element={<Navigate to="/" />} /> */}
        <Route exact path="/teamwork-swift-ferret" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
        {/* <Route exact path="/sign-in" element={<SignIn />} /> */}
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
