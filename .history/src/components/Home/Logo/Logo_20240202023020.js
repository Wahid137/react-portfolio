import Aos from "aos";
import { useEffect } from "react";
import profile from "../../../assets/images/profile.jpg";
import './Logo.scss';


const Logo = () => {

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div data-aos="fade-up" className="logo-container">
            <img

                className="solid-logo"
                src={profile}
                alt="JavaScript,  Developer"
            />

        </div>
    );
};

export default Logo;