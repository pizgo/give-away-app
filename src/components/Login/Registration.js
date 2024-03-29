import React , {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import validator from 'validator';
import {NavLink, useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Strings from '../StringResources';

const Registration = () => {

    const [inputs, setInputs] = useState({email: "", password: "", passwordRepeat: ""});
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordRepeatError, setPasswordRepeatError] = useState("");
    const {signup} = useAuth()
    const history = useHistory();


    const handleChange = (e) => {
        const {name, value} = e.target;

        setInputs((prevInputsState) => ({
            ...prevInputsState,
            [name]: value
        }));
    }

    async function signUpNewUser(email, password) {
        console.log(`trying to signingUp new user with email ${email} and password ${password}`)
        try {
            console.log(signup)
            await signup(email, password)
            history.push("/oddajrzeczy")
            console.log(`Signed up! Signed In user ${email}`)


        } catch (e) {
            const errorCode = e.code;
            const errorMessage = e.message;
            console.log(`Error during signup, code ${errorCode} message ${errorMessage}` )
        }
    }

    async function handleSubmit(e){
        e.preventDefault();

        let isDataProper = true

        if (!validator.isEmail(inputs.email)) {
            setEmailError(Strings.Errors.emailError);
            console.log(emailError);
            isDataProper = false
        } else {
            setEmailError();
        }

        if (inputs.password.length <= 5) {
            setPasswordError(Strings.Errors.passwordError);
            isDataProper = false
        } else {
            setPasswordError();
        }

        if (inputs.passwordRepeat !== inputs.password) {
            setPasswordRepeatError(Strings.Errors.repeatPasswordError);
            isDataProper = false
        } else {
            setPasswordRepeatError();
        }

        if (isDataProper){
            signUpNewUser(inputs.email, inputs.password)
        }
    }

    return (

        <div className="container">
            <section className="registration">
                <div className="registration__container">
                    <p className="registration__text">Zarejestruj się</p>
                    <img src={Decoration} alt="" id="decoration" className="login__img"/>

                    <form onSubmit={handleSubmit} className="registration__form">
                        <div className="registration__form-container">
                            <div className="registration__form-field">
                                <label className="registration__form-label">
                                    Email
                                    <p className="registration__error">{emailError}</p>
                                </label>
                                <input onChange={handleChange} value={inputs.email} type="email" name="email" className="registration__form-input" />
                            </div>
                            <div className="registration__form-field">
                                <label className="registration__form-label">
                                    Hasło
                                    <p className="registration__error">{passwordError}</p>
                                </label>
                                <input onChange={handleChange} value={inputs.password} type="password"  name="password" className="registration__form-input" />

                            </div>
                            <div className="registration__form-field">
                                <label className="registration__form-label">
                                    Powtórz hasło
                                    <p className="registration__error">{passwordRepeatError}</p>
                                </label>
                                <input onChange={handleChange} value={inputs.passwordRepeat} type="password"  name="passwordRepeat" className="registration__form-input" />
                            </div>
                        </div>
                        <div className="registration__buttons">
                            <NavLink to="/logowanie">
                                <p className="registration__buttons-btn">Zaloguj się</p>
                            </NavLink>
                            <div>
                                <button type="submit" className="registration__buttons-btn">Załóż konto</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Registration;