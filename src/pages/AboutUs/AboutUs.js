import React from 'react';
import './style.scss';
import aboutTopBg from '../../resourses/images/about_top_bg.jpg';
import about1 from '../../resourses/images/about1.png';
import about2 from '../../resourses/images/about2.png';
import about3 from '../../resourses/images/about3.png';

const AboutUs = () => {
    return (
        <section className='about_us'>
            <div className="about_us_top">
                <img src={aboutTopBg} alt="background" />
                <div className="about_us_text">
                    <h1>HayPost Med</h1>
                    <p>We are utilizing technology to disrupt pricing, drive adherence and deliver convenient and affordable pharmacy products and services. </p>
                </div>
            </div>
            <div className="about_us_content">
                
                <div className="about_us_sub">
                    <div className="about_us_sub_text">
                        <h2>We are simplifying pharmacy to improve patient outcomes</h2>
                        <p>Our advanced pharmacy dispensing and fulfillment center 
                            uses the latest in pharmacy automation, intelligence, 
                            and technology to connect patients with simple, safe, affordable, 
                            and personalized patient care services and medications.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="about_us_sub_img">
                        <img src={about1} alt="" />
                    </div>
                </div>

                <div className="about_us_sub">
                    <div className="about_us_sub_text">
                        <h3>Strong, secure, and scalable pharmacy solutions.</h3>
                        <p>Our advanced pharmacy dispensing and fulfillment center 
                            uses the latest in pharmacy automation, intelligence, 
                            and technology to connect patients with simple, safe, affordable, 
                            and personalized patient care services and medications.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="about_us_sub_img about_us_img_left">
                        <img src={about2} alt="" />
                    </div>
                </div>

                <div className="about_us_sub">
                    <div className="about_us_sub_text">
                        <h3>Prioritizing Patient Convenience, Safety, and Security</h3>
                        <p>Our advanced pharmacy dispensing and fulfillment center 
                            uses the latest in pharmacy automation, intelligence, 
                            and technology to connect patients with simple, safe, affordable, 
                            and personalized patient care services and medications.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="about_us_sub_img">
                        <img src={about3} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;