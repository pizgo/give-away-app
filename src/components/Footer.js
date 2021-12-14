import React from 'react'
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";

const Footer = () => {

    return (
        <div className="container">
            <section className="footer">
                <div className='footer__container'>
                    <div className="footer__copy">
                        Copyright by Coders Lab
                    </div>
                    <div className="footer__sm">
                        <img src={Facebook}  alt="" className="footer__sm-icon"/>
                        <img src={Instagram} alt="" className="footer__sm-icon"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;

