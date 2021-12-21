import React , {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import validator from 'validator';
import { useAuth } from "../../contexts/AuthContext";

const Registration = () => {

    const [inputs, setInputs] = useState({email: "", password: "", passwordRepeat: ""});
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordRepeatError, setPasswordRepeatError] = useState("");
    const {signup} = useAuth()


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
            await signup(inputs.email, inputs.password)
            console.log(`Signed up! Signed In user ${inputs.email}`)

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
            setEmailError("Podany email jest nieprawidłowy!");
            console.log(emailError);
            isDataProper = false
        } else {
            setEmailError();
        }

        if (inputs.password.length <= 5) {
            setPasswordError("Podane hasło jest za krótkie!");
            isDataProper = false
        } else {
            setPasswordError();
        }

        if (inputs.passwordRepeat != inputs.password) {
            setPasswordRepeatError("Hasła muszą być takie same!");
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
                                <label className="registration__form-label">Email</label>
                                <input onChange={handleChange} value={inputs.email} type="email" name="email" className="registration__form-input" />
                                <p className="registration__error">{emailError}</p>
                            </div>
                            <div className="registration__form-field">
                                <label className="registration__form-label">Hasło</label>
                                <input onChange={handleChange} value={inputs.password} type="password"  name="password" className="registration__form-input" />
                                <p className="registration__error">{passwordError}</p>
                            </div>
                            <div className="registration__form-field">
                                <label className="registration__form-label">Powtórz hasło</label>
                                <input onChange={handleChange} value={inputs.passwordRepeat} type="passwordRepeat"  name="passwordRepeat" className="registration__form-input" />
                                <p className="registration__error">{passwordRepeatError}</p>
                            </div>
                        </div>
                        <div className="registration__buttons">
                            <a href="/Login">
                                <button className="registration__buttons-btn">Zaloguj się</button>
                            </a>
                            <a href="/oddaj-rzeczy">
                                <button type="submit" className="registration__buttons-btn">Załóż konto</button>
                            </a>
                        </div>
                    </form>


                </div>
            </section>
        </div>
    )
}

export default Registration;