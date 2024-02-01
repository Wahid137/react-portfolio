import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img className="main-logo" src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel="noReferrer"
                        href="mailto:wahidahmed5037@gmail.com"
                    >
                        <FontAwesomeIcon icon={faPhone} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel="noReferrer"
                        href="mailto:wahidahmed5037@gmail.com"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel="noReferrer"
                        href="https://www.linkedin.com/in/wahid-ahmed-shanto-52b47a219/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel="noReferrer"
                        href="https://github.com/Wahid137"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel="noReferrer"
                        href="/"
                    >
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;