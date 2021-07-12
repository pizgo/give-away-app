import React from "react";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import BackgroundContactForm from "../assets/BackgroundContactForm.jpg";


const HomeContact = () => {

    return (

        <div className="container">
            <section className="contact">
                {/*<img src={BackgroundContactForm} id="decoration" className="contact__backgroundImg"/>*/}
                <div className="contact__container">
                    <p id="section4" className="contact__text">
                        Skontaktuj się z nami
                    </p>
                    <img src={Decoration} id="decoration" className="contact__deco-img"/>
                    <form className="contact__form">
                        <div className="contact__form-row1">
                            <div className="contact__form-row1-field">
                                <label className="contact__form-row1-label">Wpisz swoje imię</label>
                                <input type="text" name="name" placeholder="Krzysztof" className="contact__form-row1-input" />
                            </div>
                            <div className="contact__form-row1-field">
                                <label className="contact__form-row1-label">Wpisz swój email</label>
                                <input type="email" name="email" placeholder="abc@xyz.pl" className="contact__form-row1-input" />
                            </div>
                        </div>
                        <div className="contact__form-row2">
                            <div className="contact__form-row2-field">
                                <label className="contact__form-row2-label">Wpisz swoją wiadomość</label>
                                <input type="text" name="name" placeholder="Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aspernatur consectetur cum expedita id impedit inventore
                                laud" className="contact__form-row2-input" />
                            </div>
                        </div>
                        <button type="submit" className="contact__form-btn">Wyślij</button>
                    </form>
                </div>

                <div className="contact__footer">
                    <div className="contact__footer-copy">
                        Copyright by Coders Lab
                    </div>
                    <div className="contact__footer-sm">
                        <img src={Facebook}  className="contact__footer-sm-icon"/>
                        <img src={Instagram}  className="contact__footer-sm-icon"/>
                    </div>

                </div>

            </section>



        </div>
    )
}

export default HomeContact;
