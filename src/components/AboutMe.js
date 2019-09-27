import React from 'react';
import { blockStatement } from '@babel/types';
import Pic from './images/pic.jpg';
import Style from './style.css';
import Social from './Social';


function AboutMe() {
    return (
        <section id="aboutMe">
            <div className="row">
                <div className="col-md-5">
                    <div className="col-md-11">
                        <img src={Pic} />
                        <a className="download_btn" href="#"><
                            span>Download Resume</span></a>
                    </div>



                </div>
                <div className="col-md-7">
                    <div className="col-md-11" style={{ "text-align": 'left' }}>
                        <h3>HI I'M RAJAT DUGGAL</h3>
                        <h4>Web Developer</h4>
                        <p>My name is Rajat Duggal and I am a Computer Science graduate with 5 years of experience as a Java Developer. Working in Banking and Financial Services domain, I have expertise in Core Java programming. I inherit and belief in writing clean and reusable code. Being an experienced Application Developer I am working on latest technologies like Java, Spring Boot and SOAP web services, Hibernate, SQL, Junits and Automation using Selenium in Agile development
                </p>
                        <div className="personal_information">
                            <ul style={{ display: "inline-block", padding: "15px 0 25px", 'text-align': 'left' }}>
                                <li><a href="#">Age</a></li>
                                <li><a href="#">Nationality</a></li>
                                <li><a href="#">Address</a></li>
                                <li><a href="#">Phone</a></li>
                                <li><a href="#">Skype</a></li>
                                <li><a href="#">Email</a></li>
                                <li><a href="#">Website</a></li>
                            </ul>
                            <ul style={{ display: "inline-block", padding: "15px 120 25px", 'text-align': 'left' }}>
                                <li><a href="#">27</a></li>
                                <li><a href="#">Indian</a></li>
                                <li><a href="#">Hof, Germany</a></li>
                                <li><a href="#">+49 15770061979</a></li>
                                <li><a href="#">rajatduggs</a></li>
                                <li><a href="#">rajatduggs@gmail.com</a></li>
                                <li><a href="www.geekpandit.com">www.geekpandit.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Social />
                </div>
            </div>

        </section >
    );


}

export default AboutMe