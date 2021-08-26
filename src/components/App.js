import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Logout from "./Logout";
import GiveAway from "./GiveAway";


const App = () => {
  return (
      <>
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
      </>
  )
}

export default App;
