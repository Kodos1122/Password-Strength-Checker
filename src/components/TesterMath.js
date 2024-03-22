import React from 'react';


const TesterMath = ({ password }) => {

    //additions
    const num_characters = password.match(/[a-z]/g);
    const uppercase_characters = password.match(/[A-Z]/g);
    const lowercase_characters = password.match(/[a-z]/g);
    const numbers = password.match(/[0-9]/g);
    const symbols = password.match(/[!@#$%^&*()',.?":{}|<>]/g);

    //deductions
    const only_letters = /^[a-zA-Z]+$/g.test(password);
    const only_numbers = /^[0-9]+$/g.test(password);

    const num_characters_letters = password.match(/[A-Za-z]/g);
    const num_numbers_only = password.match(/[0-9]/g);
    const repeating_lowercase = password.match(/[a-z]{2}/g);
    const repeating_uppercase = password.match(/[A-Z]{2}/g);

    function sumArray(array) {
        var finalSum = 0;
        if (array == null) 
            return 0;
        if (array != null || !array) {
          for (var i = 0; i < array.length; i++) {
            finalSum++;
          }
          if (array.length === 0 || array.length <= 1) {
            return 0;
          } else {
            return finalSum;
          }
        }
    }

    function sumPassword(password) {
        return password.length;
    }


    //additions
    function num_characters_display() {
        const num_characters_display = num_characters;
        return sumArray(num_characters_display);
    }
    function num_characters_bonus() {
        return sumArray(num_characters)*4;
    }



    function uppercase_characters_display() {
        const uppercase_characters_display = uppercase_characters;
        return sumArray(uppercase_characters_display);
    }
    function uppercase_characters_bonus() {
        const uppercase_characters_display = uppercase_characters;
        if (uppercase_characters_display == null) {
            return 0;
        } else if (uppercase_characters_display !== 0) {
            const uppercase_characters_bonus_current = (sumPassword(password)-sumArray(uppercase_characters_display)*2);
            if (uppercase_characters_bonus_current < 0) {
                return 0;
            } else {
                return uppercase_characters_bonus_current;
            }
        } 
    }


    function lowercase_characters_display() {
        const lowercase_characters_display = lowercase_characters;
        return sumArray(lowercase_characters_display);
    }
    function lowercase_characters_bonus() {
        const lowercase_characters_display = lowercase_characters;
        if (lowercase_characters_display === null) {
            return 0;
        } else if (lowercase_characters_display !== 0) {
            const lowercase_characters_bonus_current = ((sumPassword(password)-sumArray(lowercase_characters_display))*2);
            if (lowercase_characters_bonus_current < 0) {
                return 0;
            } else {
                return lowercase_characters_bonus_current;
            }
        } 
    }


    function num_numbers_display() {
        const num_numbers_display = numbers;
        return sumArray(num_numbers_display);
    }
    function num_numbers_bonus() {
        return sumArray(numbers)*4;
    }


    function num_symbols_display() {
        return sumArray(num_symbols_display);
    }
    function num_symbols_bonus() {
        return sumArray(symbols)*4;
    }


    //deductions
    function letters_only_display() {
        if (only_letters === true) {
            const num_characters_letters_display = num_characters_letters;
            return -sumArray(num_characters_letters_display);
        } else {
            return 0;
        }
    }
    function letters_only_deduction() {
        if (only_letters === true) {
            const num_characters_letters_display = num_characters_letters;
            return -sumArray(num_characters_letters_display);
        } else {
            return 0;
        }
    }


    function numbers_only_display() {
        if (only_numbers === true) {
            const num_numbers_display = num_numbers_only;
            return -sumArray(num_numbers_display);
        } else {
            return 0;
        }
    }
    function numbers_only_deduction() {
        if (only_numbers === true) {
            const num_numbers_display = num_numbers_only;
            return -sumArray(num_numbers_display);
        } else {
            return 0;
        }
    }


    function consecutive_uppercase_display() {
        
    }
    function consecutive_uppercase_bonus() {
        
    }




    function getScore() {
        const score = (
            //Additions
            num_characters_bonus()+
            uppercase_characters_bonus()+
            lowercase_characters_bonus()
            //Deductions


        );
        return score; 
    }

    return(
        <div>
            <table className="testerTable">
                <tr>
                    <th className="testerTableCell">Additions</th>
                    <th className="testerTableCell">Type</th>
                    <th className="testerTableCell">Rate</th>
                    <th className="testerTableCell">Count</th>
                    <th className="testerTableCell">Bonus</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Number of Characters</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">+(n*4)</th>
                    <th className="testerTableCell">{num_characters_display()}</th>
                    <th className="testerTableCell">{num_characters_bonus()}</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Uppercase letters</td>
                    <td className="testerTableCell">Cond/incr</td>
                    <th className="testerTableCell">+((len-n)*2)</th>
                    <th className="testerTableCell">{uppercase_characters_display()}</th>
                    <th className="testerTableCell">{uppercase_characters_bonus()}</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Lowercase letters</td>
                    <td className="testerTableCell">Cond/incr</td>
                    <th className="testerTableCell">+((len-n)*2)</th>
                    <th className="testerTableCell">{lowercase_characters_display()}</th>
                    <th className="testerTableCell">{lowercase_characters_bonus()}</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Numbers</td>
                    <td className="testerTableCell">Cond</td>
                    <th className="testerTableCell">+(n*4)</th>
                    <th className="testerTableCell">{num_numbers_display()}</th>
                    <th className="testerTableCell">{num_numbers_bonus()}</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Symbols</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">+(n*6)</th>
                    <th className="testerTableCell">{num_symbols_display()}</th>
                    <th className="testerTableCell">{num_symbols_bonus()}</th>
                </tr>
            </table>
            <table className="testerTable">
                <tr>
                    <th className="testerTableCell">Deductions</th>
                    <th className="testerTableCell">Type</th>
                    <th className="testerTableCell">Rate</th>
                    <th className="testerTableCell">Count</th>
                    <th className="testerTableCell">Deduction</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Letters only</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-n</th>
                    <th className="testerTableCell">{letters_only_display()}</th>
                    <th className="testerTableCell">{letters_only_deduction()}</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Numbers only</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-n</th>
                    <th className="testerTableCell">{numbers_only_display()}</th>
                    <th className="testerTableCell">{numbers_only_deduction()}</th>
                </tr>
                <tr>
                    <td className="testerTableCell">Consecutive uppercase letters</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-(n*2)</th>
                    <th className="testerTableCell"></th>
                    <th className="testerTableCell"></th>
                </tr>
                <tr>
                    <td className="testerTableCell">Consecutive lowercase letters</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-(n*2)</th>
                    <th className="testerTableCell"></th>
                    <th className="testerTableCell"></th>
                </tr>
                <tr>
                    <td className="testerTableCell">Consecutive Numbers</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-(n*2)</th>
                    <th className="testerTableCell"></th>
                    <th className="testerTableCell"></th>
                </tr>
                <tr>
                    <td className="testerTableCell">Sequential letters (3+)</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-(n*3)</th>
                    <th className="testerTableCell"></th>
                    <th className="testerTableCell"></th>
                </tr>
                <tr>
                    <td className="testerTableCell">Sequential numbers (3+)</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-(n*3)</th>
                    <th className="testerTableCell"></th>
                    <th className="testerTableCell"></th>
                </tr>
                <tr>
                    <td className="testerTableCell">Sequential symbols (3+)</td>
                    <td className="testerTableCell">Flat</td>
                    <th className="testerTableCell">-(n*3)</th>
                    <th className="testerTableCell"></th>
                    <th className="testerTableCell"></th>
                </tr>
            </table>
        </div>
    );
};

export default TesterMath;