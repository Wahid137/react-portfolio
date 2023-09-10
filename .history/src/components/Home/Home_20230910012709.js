import React from 'react';

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

            </div>
        </div>
    );
};

export default Home;