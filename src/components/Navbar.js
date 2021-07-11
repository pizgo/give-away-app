import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {

    return (
        <header className="nav">
            <div className="container">
            <div className="nav__container">
                <div className="nav__main ">
                    <NavLink id="link" classnName="nav__main-element" to="/logowanie">Zaloguj</NavLink>
                    <NavLink id="link" classnName="nav__main-element" to="/rejestracja">Zarejestruj się</NavLink>
                </div>
                <div className="nav__scroll">
                    <NavLink className="nav__scroll-element" to="/">Start</NavLink>
                    <Link className="nav__scroll-element"to="section1"
                    spy={true}
                    smooth={true}
                          offset={-70}
                    duration={600}>
                        O co chodzi?</Link>
                    <Link className="nav__scroll-element"to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={600}>
                        O nas</Link>
                    <Link className="nav__scroll-element"to="section3"
                          spy={true}
                          smooth={true}
                          duration={600}>
                        Fundacje i organizacje</Link>
                    <Link className="nav__scroll-element"to="section4"
                          spy={true}
                          smooth={true}
                          duration={600}>
                        Kontakt</Link>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Navbar;
