import React , {useEffect} from "react";
import Decoration from "../../assets/Decoration.svg";
import { useAuth } from "../../contexts/AuthContext";

const Logout = () => {

    const {logout} = useAuth()

    signOutUser()   //TODO: I guess this functionality should be called from Navbar and the navigation to this component should happen after successfull logout.

    function signOutUser(){
        console.log("Logout. Try to sign out. ")
        logout().then(() => {
            // Sign-out successful.
            console.log("Logout. Sign out succesfull.")
        }).catch((error) => {
            // An error happened.
            console.log("Logout. Sign out unsucessfull due to:" + error )
        });
    }

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