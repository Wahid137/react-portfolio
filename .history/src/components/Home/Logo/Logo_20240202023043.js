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
        <div className="logo-container">
            <img

                className="solid-logo"
                src={profile}
                alt="JavaScript,  Developer"
            />
            <p data-aos="fade-up">HI</p>

        </div>
    );
};

export default Logo;