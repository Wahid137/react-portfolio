import profile from "../../../assets/images/profile.jpg";
import './Logo.scss';


const Logo = () => {
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