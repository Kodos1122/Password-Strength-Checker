import React from 'react';
import { useState } from 'react';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import './App.css'; // Assuming your styles are in App.css

import { Link } from "react-router-dom";


function App() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>How Secure is Your Password?</h1>
        <p>Check how strong is your password with our password strength checker.</p>
      </header>
      <div className="password-container">
        <div className="password-input-container">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            className="password-input"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <i
            className={`view-password-icon ${isPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}`}
            onMouseEnter={() => setIsPasswordVisible(true)}
            onMouseLeave={() => setIsPasswordVisible(false)}
          ></i>
        </div>
        <PasswordStrengthMeter password={password} />
      </div>
      <div>
        <Link to="/tester">
          <button className='nextButton'>
            Next
          </button>
        </Link>
        <footer className='appFooter' />
      </div>
    </div>
  );
};

export default App;
