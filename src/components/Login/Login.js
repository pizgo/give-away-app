import React , {useState} from "react";
import Decoration from "../../assets/Decoration.svg";
import validator from 'validator';
import { AuthErrorCodes } from 'firebase/auth';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Strings from '../StringResources'

const Login = () => {

    const [ inputs, setInputs] = useState ( {email: "", password: ""});
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const {login} = useAuth()
<<<<<<< Updated upstream
    const history = useHistory();
=======
>>>>>>> Stashed changes

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
        login(email, password)
                .then(
                  (userCredential) => {
                      console.log(`Succesfully signedIn user ${userCredential} `)
                      history.push("/oddajrzeczy")
                    })
                .catch((error) =>{
                    console.log("Error during signing user:")
                    console.log("Error code: " + error.code)

                    if (error.code == AuthErrorCodes.INVALID_PASSWORD){
                        setPasswordError(Strings.Errors.loginPasswordError)
                    } else if (error.code == AuthErrorCodes.USER_DELETED){
                        setEmailError(Strings.Errors.loginUserError)
                    }
            })
    }

    const handleSubmit = e => {
        e.preventDefault();

        let isDataProper = true;

        if (!validator.isEmail(inputs.email)) {
            setEmailError(Strings.Errors.emailError);
            isDataProper = false
        } else {
            setEmailError();
        }

        if (inputs.password.length <= 5) {
            setPasswordError(Strings.Errors.passwordError);
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
                                <label className="login__form-label">
                                    Email
                                    <p className="login__error">{emailError}</p>
                                </label>
                                <input onChange={handleChange} value={inputs.email} type="email" name="email" className="login__form-input" />

                           </div>
                            <div className="login__form-field">
                                <label className="login__form-label">
                                    Hasło
                                    <p className="login__error">{passwordError}</p>
                                </label>
                                <input onChange={handleChange} value={inputs.password} type="password"  name="password" className="login__form-input" />

                            </div>
                       </div>
                        <div className="login__buttons">
                            <a href="/oddajrzeczy">
                                  <button type="submit" className="login__buttons-btn">Zaloguj się</button>
                            </a>
                            <a href="/rejestracja">
                                <p className="login__buttons-btn">Załóż konto</p>
                            </a>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default Login;