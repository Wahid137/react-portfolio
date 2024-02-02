import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import js from "../../../assets/images/js.png";
import profile from "../../../assets/images/profile.jpg";
import react from "../../../assets/images/react.png";
import './Logo.scss';


const Logo = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="logo-container">
            <div className='skill-item'>
                <div className='list-item-div'>
                    <li className='list-item'><img className="icon" src={js} alt="" /></li>

                </div>
                <div className='list-item-div'>
                    <li className='list-item'><img className="icon" src={react} alt="" /></li>

                </div>
            </div>

            <img
                data-aos="zoom-in" data-aos-duration="1500"
                className="solid-logo"
                src={profile}
                alt="JavaScript,  Developer"
            />


        </div>
    );
};

export default Logo;