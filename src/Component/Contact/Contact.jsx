import './Contact.css'
import React from "react";
import msg_icon from '../../../public/Portfolio_assets/msg-icon.png'
import mail_icon from '../../../public/Portfolio_assets/mail-icon.png'
import phone_icon from '../../../public/Portfolio_assets/phone-icon.png'
import location_icon from '../../../public/Portfolio_assets/location-icon.png'
import white_icon from '../../../public/Portfolio_assets/white-arrow.png'




const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c563bc98-c9c8-4fa2-a6ce-31b13aeb2c15");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div>
            <h3 className="contact_title">
                Contact <span className='contact-me'>me</span>
            </h3>
            <div className='contact'>
                <div className="contact-col">
                    <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
                    <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <ul>
                        <li> <img src={mail_icon} alt="" /> mosayebhossain09@gmail.com</li>
                        <li> <img src={phone_icon} alt="" /> +8801621318409</li>
                        <li> <img src={location_icon} alt="" /> Mirpur-6,Dhaka,Bangladesh</li>

                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <div className="form-part">
                            <div>
                                
                                <input type="text" name='name' placeholder='Enter Your Name' required />

                            </div>
                            <div>
                                
                                <input type="email" name="" id="" placeholder='Your Email' required />
                            </div>

                        </div>
                        <div className="form-part">
                           <div>
                           <input type="number" placeholder='Enter Your Number' required />
                           </div>
                           <div>
                            <input type="text" placeholder='Enter Your Mail Title' required/>
                           </div>
                        </div>
                       
                        
                        
                        <label>Write Your Messages Here</label>
                       
                        <textarea name="text" id="" cols="30" rows="10" placeholder='Enter Your message Here' required> </textarea>
                        <button type="submit" className='btn dark-btn'>Submit Now <img src={white_icon} alt="" /> </button>
                    </form>
                    <span>{result}</span>
                </div>


            </div>
        </div>
    );
};

export default Contact;