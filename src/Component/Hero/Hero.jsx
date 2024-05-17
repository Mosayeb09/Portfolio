import './Hero.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
    return (
        <div className='hero-container'>
        <div className="hero-text">
            <h3>Hi, Myself</h3>
            <h1>Mosayeb Hossain</h1>
            <h3>And I'm a <span className='dev'>Frontend Developer</span></h3>
            <p>Enthusiastic entry-level Web Developer with a strong skill set, innovative mindset, and proficiency
                in web development languages and frameworks. Seeking a role within a dynamic team to drive
                advancements in web development and foster professional growth.</p>
                <div className="social-media">
                    <a href="">{<FaFacebook />} </a>
                    <a href="">{<FaSquareInstagram />} </a>
                    <a href="">{<RiLinkedinBoxFill />} </a>
                    <a href="">{<BsGithub />} </a>
                </div>
                
                <a href=""><button className='btn'>Download Cv</button></a>
        </div>
        <div className="hero-img">

        </div>

    </div>
    );
};

export default Hero;