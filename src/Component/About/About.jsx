import './About.css'
import about_pfl from '../../../public/Portfolio_assets/About-pfl.png'

const About = () => {
    return (
        <div>
            <section>
                <div className="about-container">
                    <div className="about-left">
                        <img src={about_pfl} alt="" className='about-img' />
                    </div>
                    <div className="about-right">
                        <h3>About <span>Me</span></h3>
                        <h2>Frontend Developer</h2>

                        <p>Enthusiastic entry-level Web Developer with a strong skill set, innovative mindset, and proficiency
                            in web development <br /> languages and frameworks. Seeking a role within a dynamic team to drive
                            advancements in web development and foster professional growth.</p>
                            <button className="btn">Read More</button>

                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default About;