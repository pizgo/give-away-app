import React , {useState, useEffect} from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const { currentUser } = useAuth()
    return (
        <header className="nav">
            <div className="container">
            <div className="nav__container">
                <div className="nav__main ">
                    <div className="nav__main_loggedOut" style={{display: currentUser != null ? 'none' : 'block' }}>
                        <NavLink className="nav__main-element" to="/logowanie">Zaloguj</NavLink>
                        <NavLink className="nav__main-element" to="/rejestracja">Zarejestruj się</NavLink>
                    </div>

                    <div className="nav__main_loggedIn" style={{display: currentUser != null ? 'block' : 'none' }}>
                        <div className="nav__main-element">Cześć {currentUser != null ? currentUser.email : ''}</div>
                        <NavLink className="nav__main-element" to="/oddaj_rzeczy">Oddaj rzeczy</NavLink>
                        <NavLink className="nav__main-element" to="/wylogowano">Wyloguj</NavLink>
                    </div>

                </div>
                <div className="nav__scroll">
                    <NavLink className="nav__scroll-element" to="/">
                        Start
                    </NavLink>
                    <Link className="nav__scroll-element"to="section1"
                    spy={true}
                    smooth={true}
                          offset={-70}
                    duration={600}>
                       O co chodzi?
                    </Link>
                    <Link className="nav__scroll-element"to="section2"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={600}>
                        O nas
                    </Link>
                    <Link className="nav__scroll-element"to="section3"
                          spy={true}
                          smooth={true}
                          duration={600}>
                        Fundacje i organizacje
                        </Link>
                    <Link className="nav__scroll-element"to="section4"
                          spy={true}
                          smooth={true}
                          duration={600}>
                        Kontakt
                    </Link>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Navbar;