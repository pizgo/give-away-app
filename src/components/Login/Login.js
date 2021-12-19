import React , {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import validator from 'validator';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthErrorCodes } from "firebase/auth"



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

    function signInUser(email, password) {
        console.log(`trying to signIn user ${email} with password ${password}`)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Succesfully signedIn user ")
                console.log(user)

            })
            .catch((error) => {
                console.log("Error during signing user:")
                console.log("Error code: " + error.code)
                const errorCode = error.code;
                const errorMessage = error.message;

                if (error.code == AuthErrorCodes.INVALID_PASSWORD){
                    setPasswordError("Nieudane logowanie. Podano złe hasło.")
                } else if (error.code == AuthErrorCodes.USER_DELETED){
                    setEmailError("Nieudane logowanie. Nie znaleziono takie użytkownika")
                }

            });
    }

    const handleSubmit = e => {
        e.preventDefault();

        let isDataProper = true;

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

        if(isDataProper){
            signInUser(inputs.email, inputs.password)
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
                            <a href="/oddaj-rzeczy">
                                  <button type="submit" className="login__buttons-btn">Zaloguj się</button>
                            </a>
                        </div>
                    </form>


                </div>
            </section>
        </div>
    )
}

export default Login;