import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import profile from "../../../assets/images/profile.jpg";
import './Logo.scss';


const Logo = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="logo-container">
            <div className='list-item-div'>
                <li className='list-item'><img className="icon" src={js} alt="" /></li>
                <p className='title'>Javascript</p>
            </div>
            <div className='list-item-div'>
                <li className='list-item'><img className="icon" src={react} alt="" /></li>
                <p className='title'>React Js</p>
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