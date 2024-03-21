import React from 'react';


const TesterMath = ({ password }) => {

    const num_characters = password.match(/[a-z]/g);
    const uppercase_characters = password.match(/[A-Z]/g);
    
    const repeating_lowercase = password.match(/[a-z]*/g);
    const repeating_uppercase = password.match(/[A-Z]*/g);


    const getScore = () => {
        //Additions
        const num_characters_rate = num_characters.length;
        const num_uppercase_characters_rate = uppercase_characters;

        //deductions
        const consecutive_lowercase_letters = -repeating_lowercase;
        const consecutive_uppercase_letters = -repeating_uppercase;

        const score = (
            num_characters_rate
            //num_uppercase_characters_rate+
            //consecutive_lowercase_letters+
            //consecutive_uppercase_letters 
        );
        
        return score; 
    }

    
    return(
        <div>
            <h4>{getScore()}</h4>
        </div> 
    );
};

export default TesterMath;