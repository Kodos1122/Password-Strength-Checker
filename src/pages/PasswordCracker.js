// PasswordCracker.js
import { Link } from "react-router-dom";
import '../App.css'; // Assuming your styles are in App.css
import Cracker from '../components/Cracker.js';
import React, { useState } from 'react';

const PasswordCracker = () => {
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
                <Cracker password={password} />
            </div>
            <div className='bodyContainer'>
                <h4 className="subtitleText">Still disappointed?</h4>
                <h5 className="subtitleText">Continue to see a mathematical representation of why your password might be bad</h5>
                <h5 className="subtitleText">Or, go back and check out our password generation tips</h5>
                <table className="buttonTable">
                    <tr>
                        <td>
                            <Link to="/">
                                <button className='nextButton'>Back</button>
                            </Link>
                        </td>
                        <td>
                            <Link to="/tester">
                                <button className='nextButton'>Continue</button>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
            <footer className="appFooter"></footer>
        </div>
    );
};

export default PasswordCracker;
