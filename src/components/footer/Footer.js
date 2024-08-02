import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">

            {/* This is the leftmost column of the footer */}
            <div className="column">
                <h4>Opening Hours</h4>
                <strong>Sunday: </strong><p>8am - 2pm</p>
                <strong>Monday: </strong><p>CLOSED</p>
                <strong>Tuesday: </strong><p>CLOSED</p>
                <strong>Wednesday: </strong><p>CLOSED</p>
                <strong>Thursday: </strong><p>10:30am - 2pm and 5pm - 7pm</p>
                <strong>Friday: </strong><p>10:30am - 8pm</p>
                <strong>Saturday: </strong><p>8am - 8pm</p>
            </div>

            {/* This is the middle column of the footer */}
            <div className="column">
                <h4>Location</h4>
                <a href='https://www.google.com/maps/dir//1704+Ranch+to+Market+Rd+3014,+Tow,+TX+78672/@30.8604862,-98.5288509,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x865af7393e05d7b9:0xc06f88dc8ad0bb67!2m2!1d-98.4464481!2d30.8605043?entry=ttu'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>1704 Ranch to Market Rd 3014, Tow, TX 78672</p>
                </a>
            </div>

            {/* This is the rightmost column of the footer */}
            <div className="column">
                <h4>Contact Us</h4>
                <p>Phone: (325) 248-5585</p>
                <p>Our Social Media</p>
                <div className='column-images'>
                    <a href='https://www.facebook.com/p/Binnie-Boys-Burgers-100057629011837/' target="_blank" rel="noopener noreferrer">
                        <div className="image-container">
                            <img
                                src="https://www.freeiconspng.com/uploads/photos-facebook-logo-png-transparent-background-13.png" // Replace with the actual path to your image
                                alt=""
                            />
                        </div>
                    </a>

                    <a href='https://www.yelp.com/biz/binnie-boys-burgers-tow' target="_blank" rel="noopener noreferrer">
                        <div className="image-container">
                            <img
                                src="https://png2.cleanpng.com/sh/c91ac1c26a6557ac080d3c2f0a275931/L0KzQYm3VcA2N5p7iZH0aYP2gLBuTglmdKEyftHAbnTkhLr2jr17d6NneZ98LYTkhrb5jr1td5h0RdVAc4Tyfbb5Tgdmal43RaI2c4T8fLa0VfFmbGpqSqhrZkHmQoO1WcA4PWo4SaI6NUK4RYO4WcU5P2k3UJD5bne=/kisspng-yelp-foundation-zorba-s-tavern-logo-customer-web-2-0-style-5aed9e26bf1c22.9075931015255219587828.png" // Replace with the actual path to your image
                                alt=""
                            />
                        </div>
                    </a>
                </div>


            </div>
        </footer>
    );
};


export default Footer;