import React from 'react';
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import tailwind from "../../assets/images/tailwind.png";
import "../About/About.scss";

const About = () => {
    return (
        <div className='about-page'>
            <h1>Skills and Works</h1>
            <div className='skills-works'>
                <div className='skills-part'>
                    <ul className='skills-ul'>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={html} alt="" /></li>
                            <p className='title'>HTML</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={css} alt="" /></li>
                            <p className='title'>CSS</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={bootstrap} alt="" /></li>
                            <p className='title'>Bootstrap</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={tailwind} alt="" /></li>
                            <p className='title'>Tailwind CSS</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={react} alt="" /></li>
                            <p className='title'>React Js</p>
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