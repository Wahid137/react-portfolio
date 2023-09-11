import React, { useState } from 'react';
import './Home.scss';
import logoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                    <img src={logoTitle} alt="developer" />
                    hanto
                    <br />
                    web developer
                </h1>
                <h2>Fronted Developer / Javascript Expert / React</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
};

export default Home;