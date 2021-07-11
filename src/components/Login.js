import React from "react";
import Decoration from "../assets/Decoration.svg";

const Login = () => {

    return (

        <div className="login">
            <div className="login__container">
                <p className="login__text">Zaloguj się</p>
                <img src={Decoration} id="decoration" className="login__img"/>
                <form className="login__form>">
                    <label className="login__form-label">Email</label>
                    <input type="email" name="login" className="login__form-input" />
                    <label className="login__form-label">Hasło</label>
                    <input type="password"  name="password"className="login__form-input" />
                </form>
                <div className="login__form-buttons">
                    <a href="/Register">
                        <button className="login__button">Załóż konto</button>
                    </a>
                    <button className="login__button">Wyslij</button>
                </div>


            </div>
        </div>
    )
}

export default Login;