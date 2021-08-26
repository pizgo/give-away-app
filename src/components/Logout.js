import React , {useState} from "react";
import Decoration from "../assets/Decoration.svg";



const Logout = () => {

    return (

        <div className="container">
            <section className="logout">
                <div className="logout__container">
                    <p className="logout__text">Wylogowanie nastąpiło <br/>pomyślnie!</p>
                    <img src={Decoration} alt="" id="decoration" className="logout__img"/>
                    <a href="/">
                        <button className="logout__btn">Strona główna </button>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Logout;