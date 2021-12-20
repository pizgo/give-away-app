import React , {useState, useEffect} from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {

    const [ user, setUser] = useState(null);

    useEffect( () => {
        registerAuthStateChangeListener();
    },[]);

    function registerAuthStateChangeListener(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            setUser(user)

            if (user) {
                console.log("Navbar. User has signed in.")
                console.log(user)

                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                console.log("Navbar. User has signed out.")

                // User is signed out
                // ...
            }
        });
    }

    return (
        <header className="nav">
            <div className="container">
            <div className="nav__container">
                <div className="nav__main ">
                    <div className="nav__main_loggedOut" style={{display: user != null ? 'none' : 'block' }}>
                        <NavLink className="nav__main-element" to="/logowanie">Zaloguj</NavLink>
                        <NavLink className="nav__main-element" to="/rejestracja">Zarejestruj się</NavLink>
                    </div>

                    <div className="nav__main_loggedIn" style={{display: user != null ? 'block' : 'none' }}>
                        <div className="nav__main-element">Cześć {user != null ? user.email : ''}</div>
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