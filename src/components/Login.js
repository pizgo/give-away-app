import React , {useState} from "react";
import Decoration from "../assets/Decoration.svg";
import validator from 'validator';


const Login = () => {

    const [ inputs, setInputs] = useState ( {email: "", password: ""});
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");

    const handleChange = (e) => {
        console.log("handlechange");
        const { name, value } = e.target;

        setInputs((prevInputsState) => ({
            ...prevInputsState,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!validator.isEmail(inputs.email)) {
            setEmailError("Podany email jest nieprawidłowy!");
            console.log(emailError);
        } else {
            setEmailError();

        }


        if (inputs.password.length <= 5) {
            setPasswordError("Podane hasło jest za krótkie!");
        } else {
            setPasswordError();
        }
    }


    return (

        <div className="container">
            <section className="login">
                <div className="login__container">
                    <p className="login__text">Zaloguj się</p>
                    <img src={Decoration} alt="" id="decoration" className="login__img"/>

                    <form onSubmit={handleSubmit} className="login__form">
                       <div className="login__form-container">
                           <div className="login__form-field">
                                <label className="login__form-label">Email</label>
                                <input onChange={handleChange} value={inputs.email} type="email" name="email" className="login__form-input" />
                               <p className="login__error">{emailError}</p>
                           </div>
                            <div className="login__form-field">
                                <label className="login__form-label">Hasło</label>
                                <input onChange={handleChange} value={inputs.password} type="password"  name="password" className="login__form-input" />
                                <p className="login__error">{passwordError}</p>
                            </div>
                       </div>
                        <div className="login__buttons">
                            <a href="/Register">
                                <button className="login__buttons-btn">Załóż konto</button>
                            </a>
                            <button type="submit" className="login__buttons-btn">Zaloguj się</button>
                        </div>
                    </form>


                </div>
            </section>
        </div>
    )
}

export default Login;