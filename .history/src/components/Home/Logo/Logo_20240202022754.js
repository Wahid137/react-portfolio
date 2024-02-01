import { useEffect } from "react";
import profile from "../../../assets/images/profile.jpg";
import './Logo.scss';


const Logo = () => {

    useEffect(() => {
        AOS.init({
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

        </div>
    );
};

export default Logo;