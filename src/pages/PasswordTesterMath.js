import { Link } from "react-router-dom";
import '../App.css'; // Assuming your styles are in App.css
import TesterMath from '../components/TesterMath.js';
import React from 'react';
import { useState } from 'react';

const PasswordTesterMath = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1>How Secure is Your Password?</h1>
                <p>Check your password strength</p>
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
            </div>
            <div className="password-requirements">
                <TesterMath password={password} />
                <Link to="/">
                    <button className="nextButton">
                        Back
                    </button>
                </Link>
            </div>

            <footer className="appFooter"></footer>
        </div>
    );
};

export default PasswordTesterMath;