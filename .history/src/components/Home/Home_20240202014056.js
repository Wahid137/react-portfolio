import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/logo-s.png';
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
        // Assuming your CV file is in the public folder
        const cvUrl = '/path/to/your/cv.pdf';

        // Create a link element
        const link = document.createElement('a');
        link.href = cvUrl;

        // Set the download attribute and the filename
        link.download = 'your-cv.pdf';

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document body
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
                <Link className="flat-button">DOWNLOAD CV</Link>
            </div>
            <Logo />
        </div>
    );
};

export default Home;