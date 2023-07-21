import React from "react";
import './Footer.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <div className="footer">
            <div className="social-media">
                <h1>Brown Bear Coffee</h1>
                <div className="social-group">
                    <a href="https://www.facebook.com/BrownBearCoffee2022" className='social-icons'><FontAwesomeIcon icon={faFacebook} style={{ color: "#f5f5f5", }} /></a>
                    <a href='https://www.instagram.com/brownbear_irby' className='social-icons'><FontAwesomeIcon icon={faInstagram} style={{ color: "#f5f5f5", }} /></a>
                </div>
            </div>
            <div className="contact-us">
                <h3>Contact Us</h3>
                <ul>
                    <li><p>45 Thingwall Road, Irby, United Kingdom</p></li>
                    <li><p>0151 936 3213</p></li>
                    <li><p>www.bownbearcoffee.co.uk</p></li>
                </ul>
            </div>
        </div>
    )
}