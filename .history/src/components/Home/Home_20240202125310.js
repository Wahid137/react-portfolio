import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import js from "../../assets/images/js.png";
import logoTitle from '../../assets/images/logo-s.png';
import react from "../../assets/images/react.png";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Home.scss';
import Logo from './Logo/Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h', 'a', 'n', 't', 'o']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 9000)
    }, [])


    const handleDownload = () => {
        const cvUrl = '/Resume_Wahid.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'your-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={logoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>
                <h2>Fronted Developer / Javascript Expert / React</h2>
                <Link onClick={handleDownload} className="flat-button">DOWNLOAD CV</Link>
            </div>
            <div className='skill-item'>
                <div className='home-icon'>
                    <li className='list-item'><img className="icon" src={js} alt="" /></li>

                </div>
                <div className='home-icon'>
                    <li className='list-item'><img className="icon" src={react} alt="" /></li>
                </div>
            </div>
            <Logo />
        </div>
    );
};

export default Home;