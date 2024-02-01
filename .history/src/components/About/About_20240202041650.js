import React from 'react';
import js from "../../assets/images/js.png";
import "../About/About.scss";

const About = () => {
    return (
        <div className='about-page'>
            <h1>Skills and Works</h1>
            <div className='skills-works'>
                <div className='skills-part'>
                    <ul className='skills-ul'>
                        <div>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>


                    </ul>
                </div>
                <div className='works-part'>
                    <h1>Works</h1>
                </div>
            </div>


        </div>
    );
};

export default About;