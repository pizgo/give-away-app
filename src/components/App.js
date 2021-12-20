import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import Logout from "./Login/Logout";
import GiveAway from "./GiveAway/GiveAway";
import {AuthProvider} from "../contexts/AuthContext";

const App = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/logowanie">
                            <Login/>
                        </Route>
                        <Route exact path="/rejestracja">
                            <Registration/>
                        </Route>
                        <Route exact path="/wylogowano">
                            <Logout/>
                        </Route>
                        <Route exact path="/oddaj-rzeczy">
                            <GiveAway/>
                        </Route>

                        <Route exact path="/">
                            <Home/>
                        </Route>

                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App;
