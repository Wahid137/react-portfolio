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