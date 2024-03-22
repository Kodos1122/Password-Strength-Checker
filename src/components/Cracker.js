import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const Cracker = ({ password }) => {
  const [isCompromised, setIsCompromised] = useState(false);
  const [compromisedCount, setCompromisedCount] = useState(0);

  useEffect(() => {
    const checkPassword = async (password) => {
      try {
        const hashedPassword = CryptoJS.SHA1(password).toString().toUpperCase();
        const prefix = hashedPassword.slice(0, 5);
        const suffix = hashedPassword.slice(5);
    
        const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
        
        const responseData = response.data.split('\n');
        
        for (const entry of responseData) {
          const [hashSuffix, count] = entry.split(':');
          if (hashSuffix === suffix) {
          
            setIsCompromised(true);
            setCompromisedCount(parseInt(count));
            return;
          }
        }

        setIsCompromised(false);
        setCompromisedCount(0);
      } catch (error) {
        console.error('Error checking password:', error);
        setIsCompromised(false);
        setCompromisedCount(0);
      }
    };

    if (password) {
      checkPassword(password);
    }
  }, [password]);

  if (!password) {
    return null;
  }

  return (
    <div>
      {isCompromised ? (
        <p style={{ color: 'red' }}>This password has been compromised {compromisedCount} times.</p>
      ) : (
        <p style={{ color: 'green' }}>This password has not been compromised.</p>
      )}
    </div>
  );
};

export default Cracker;
