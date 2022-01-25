import React, { useState, useEffect } from 'react'
import validator from 'validator';
import Decoration from '../assets/Decoration.svg';
import BackgroundContactForm from '../assets/BackgroundContactForm.jpg';
import Footer from './Home/Footer';
import Strings from './StringResources'


    const ContactForm = () => {
        const [ inputs, setInputs] = useState ( {name: "", email: "", message: ""});
        const [ nameError, setNameError ] = useState("");
        const [ emailError, setEmailError ] = useState("");
        const [ messageError, setMessageError ] = useState("");
        const [success, setSuccess] = useState();

        const handleChange = (e) => {
            const { name, value } = e.target;

            setInputs((prevInputsState) => ({
                ...prevInputsState,
                [name]: value
            }));
        }

        const handleSubmit = e => {
            e.preventDefault();

            let isAnyError = false;

            if(inputs.name.length === 0) {
                setNameError(Strings.Errors.nameError);
                isAnyError = true
            } else {
                setNameError();
            }

            if (!validator.isEmail(inputs.email)){
                setEmailError(Strings.Errors.emailError);
                isAnyError = true
            } else {
                setEmailError();
            }

            if (inputs.message.length < 120) {
                setMessageError(Strings.Errors.messageError);
                isAnyError = true
            } else {
                setMessageError();
            }


            //jezeli brak bledu to wysylamy do serwera
            if (!isAnyError){

                console.log("Wysylamy do serwera");

                fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputs)
                })
                    .then(data => {
                        console.log("serwer ok" + data);
                        console.log(data);
                        setSuccess("Wiadomość została wysłana! Wkrótce się skontaktujemy");
                    })
                    .catch(error => {
                        console.log("serwer błąd" + error);
                    })
            }
        }


    return (

    <div className="container">
        <section className="contact">
            <img src={BackgroundContactForm} id="decoration" className="contact__backgroundImg"/>
            <div className="contact__container">
                <p id="section4" className="contact__text">
                    Skontaktuj się z nami
                </p>
                <img src={Decoration} alt="" id="decoration" className="contact__deco-img"/>
                <div className="contact__boxSuccess">
                     <p className="contact__success">{success}</p>
                </div>
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="contact__form-row1">
                        <div className="contact__form-row1-field">
                            <label className="contact__form-row1-label">
                                Wpisz swoje imię
                                <p className="contact__error">{nameError}</p>
                            </label>
                            <input onChange={handleChange}  type="text" name="name" value={inputs.name}
                                        placeholder="Krzysztof"
                                        className="contact__form-row1-input" />
                        </div>
                        <div className="contact__form-row1-field">
                            <label className="contact__form-row1-label">
                                Wpisz swój email
                                <p className="contact__error">{emailError}</p>
                            </label>
                            <input onChange={handleChange} type="email" name="email" value={inputs.email}
                                       placeholder="abc@xyz.pl" className="contact__form-row1-input" />
                        </div>
                    </div>
                    <div className="contact__form-row2">
                        <div className="contact__form-row2-field">
                            <label className="contact__form-row2-label">
                                Wpisz swoją wiadomość
                                <p className="contact__error-row2">{messageError}</p>
                            </label>
                            <textarea onChange={handleChange} name="message" value={inputs.message} placeholder="Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aspernatur consectetur cum expedita id impedit inventore laud consectetur cum expedita id impedit inventore laud"
                                   className="contact__form-row2-input" rows='4'/>
                        </div>
                    </div>
                    <button type="submit"  className="contact__form-btn">Wyślij</button>
                </form>
            </div>
            <Footer/>
        </section>
    </div>
    )
}

export default ContactForm;
