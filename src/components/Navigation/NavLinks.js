import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";

const NavLinks = ({isMobile, closeMobileMenu}) => {


    const { currentUser } = useAuth()
    return (
        <header className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__main-loggedOut" style={{display: currentUser != null ? 'none' : 'block' }}>
                        <NavLink className="nav__main-element" to="/logowanie" onClick={isMobile && closeMobileMenu}>
                            Zaloguj</NavLink>
                        <NavLink className="nav__main-element" to="/rejestracja" onClick={isMobile && closeMobileMenu}>
                            Zarejestruj się</NavLink>
                    </div>
                    <div className="nav__main-loggedIn" style={{display: currentUser != null ? 'block' : 'none' }}>
                        <div className="nav__main-element-user">Cześć {currentUser != null ? currentUser.email : ''}</div>
                        <NavLink className="nav__main-element" to="/oddajrzeczy"
                                 onClick={isMobile && closeMobileMenu}>
                            Oddaj rzeczy</NavLink>
                        <NavLink className="nav__main-element" to="/wylogowano"onClick={isMobile && closeMobileMenu}>
                            Wyloguj</NavLink>
                    </div>



                    <div className="nav__scroll">
                        <NavLink className="nav__scroll-element" to="/"
                                 onClick={isMobile && closeMobileMenu}>
                            Start
                        </NavLink>
                        <Link className="nav__scroll-element"to="section1"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={600}
                              onClick={isMobile && closeMobileMenu}>
                            O co chodzi?
                        </Link>
                        <Link className="nav__scroll-element"to="section2"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={600}
                              onClick={isMobile && closeMobileMenu}>
                            O nas
                        </Link>
                        <Link className="nav__scroll-element"to="section3"
                              spy={true}
                              smooth={true}
                              duration={600}
                              onClick={isMobile && closeMobileMenu}>
                            Fundacje i organizacje
                        </Link>
                        <Link className="nav__scroll-element"to="section4"
                              spy={true}
                              smooth={true}
                              duration={600}
                              onClick={isMobile && closeMobileMenu}>
                            Kontakt
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )

}

export default NavLinks;