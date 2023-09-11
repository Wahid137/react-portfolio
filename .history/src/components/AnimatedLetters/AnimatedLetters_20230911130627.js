import React from 'react';
import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    // console.log(char+1)
                    <span key={char + i}>

                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetters;