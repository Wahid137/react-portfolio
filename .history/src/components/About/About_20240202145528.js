import React from 'react';
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import express from "../../assets/images/express.png";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.png";
import mongo from "../../assets/images/mongo.png";
import node from "../../assets/images/node.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
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
                            <p className='title'>Tailwind </p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={js} alt="" /></li>
                            <p className='title'>Javascript</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={react} alt="" /></li>
                            <p className='title'>React Js</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={redux} alt="" /></li>
                            <p className='title'>Redux</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={node} alt="" /></li>
                            <p className='title'>Node Js</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={express} alt="" /></li>
                            <p className='title'>Express</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={git} alt="" /></li>
                            <p className='title'>Git</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={figma} alt="" /></li>
                            <p className='title'>Figma</p>
                        </div>
                        <div className='list-item-div'>
                            <li className='list-item'><img className="icon" src={mongo} alt="" /></li>
                            <p className='title'>Mongo DB</p>
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