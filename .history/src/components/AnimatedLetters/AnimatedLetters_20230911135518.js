import React from 'react';
import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) =>
                    // console.log(char+1)
                    <span key={char + i} className={`${letterClass} _${i + idx} text-animate-hover`}>
                        {char}
                    </span>
                )
            }
        </span>
    );
};

export default AnimatedLetters;