import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarMain from "./NavbarMain";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";



const App = () => {
  return (
      <>
        <BrowserRouter>
            <NavbarMain/>
                <Switch>
                    <Route exact path="/logowanie">
                        <Login/>
                    </Route>
                    <Route exact path="/rejestracja">
                        <Registration/>
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
