import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
                <Link to="/contact">CONTACT ME</Link>
            </div>
        </div>
    );
};

export default Home;