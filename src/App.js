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
        <p>Check your password strength</p>
      </header>
      <h4 className="subtitleText">Enter your password below to test its strength</h4>
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
      
      <div className='bodyContainer'>
        <h4 className="subtitleText">Is the result disappointing?</h4>
        <h5 className="subtitleText">Try exploring our Password Generation Tips below or continue to other password analyzation methods</h5>
        <Link to="/cracker">
          <button className='nextButton'>Continue</button>
        </Link>
      </div>
      <div className='bodyContainer2'>
        <table className='testerTable'>
          <tr>
            <td className='testerTableHeader' colspan='2'>
              <h5 className='subtitleText'>Common Password Mistakes</h5>
            </td>
          </tr>
          <tr>
            <td className='testerTableHeader'>NEVER use personal information</td>
            <td className='testerTableCell'>While its easy to use personal information for your password to make it memorizable, it also makes it easier for hackers to brute-force hack your accounts.</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>NEVER use easy-to-remember phrases like '1234' or 'aabbcc'</td>
            <td className='testerTableCell'>Again, passwords like these may be easier to remember, but that also means that a hacker can more easily hack through it.</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>NEVER use default passwords</td>
            <td className='testerTableCell'>Many accounts and services set you up with a default password like 'admin' or 'password'. Never use these passwords as they are usually the very first a hacker will try when attempting to gain access to your accounts.</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>NEVER reuse your old or existing passwords</td>
            <td className='testerTableCell'>Many users will simply use the same password across all their accounts and services. However, if a hacker gains access to your password, they will gian access to everything that you use that password to protect.</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>NEVER share your passwords</td>
            <td className='testerTableCell'>Sometimes we just want to give a friend, family, or even a colleague our account information for whatever reason. But, you can never trust another person as much as yourself when it comes to password security, if they lose your password its your responsibility! </td>
          </tr>
          <tr>
            <td className='testerTableHeader' colspan='2'>
              <h5 className='subtitleText'>Good Practices</h5>
            </td>
          </tr>
          <tr>
            <td className='testerTableHeader'>Include Uppercase Letters</td>
            <td className='testerTableCell'>Including uppercase characters is one of the simplest ways to increase the security of your password. In fact, it is a requirement in most modern online accounts and services.</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>Include Numbers</td>
            <td className='testerTableCell'>Numbers ina password greatly increase its security by adding another layer of protection against brute-force password hacks</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>Include Symbols</td>
            <td className='testerTableCell'>The last type of character you should always include are symbols. Symbols are one of the easiest ways to improve the security of your password, and you only have to include at least one of them!</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>Change your password regularly</td>
            <td className='testerTableCell'>Most users never change their passwords, which is usually fine, but what if your information was somehow leaked without your knowledge? By changing your password regularly you can rest easy knowing that your old passwords will not come back to bite you.</td>
          </tr>
          <tr>
            <td className='testerTableHeader'>Share your passwords through safe channels</td>
            <td className='testerTableCell'>Inevitably, sometimes you must share your password to a friend, family, or even a colleague. If this situation arises, the best practice is to use a safe channel to deliver the password such as physically (in-person), or encrypted methods.</td>
          </tr>
        </table>
      </div>
      <footer className='appFooter' />
    </div>
  );
};

export default App;