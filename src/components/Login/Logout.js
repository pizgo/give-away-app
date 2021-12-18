import React , {useEffect} from "react";
import Decoration from "../../assets/Decoration.svg";
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {

    signOutUser()   //TODO: I guess this functionality should be called from Navbar and the navigation to this component should happen after successfull logout.

    function signOutUser(){
        console.log("Logout. Try to sign out. ")
        const auth = getAuth();
        signOut(auth).then(() => {
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