import React from 'react';

import {BrowserRouter, Switch, Route} from "react-router-dom";


import './App.css';
import {LoginScreen} from "./screens/LoginScreen";
import {CreateAccountScreen} from "./screens/CreateAccountScreen";
import {HomeScreen} from "./screens/HomeScreen";

function App() {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <LoginScreen/>
                </Route>
                <Route path={"/create-account"}>
                    <CreateAccountScreen/>
                </Route>
                <Route path={"/home"}>
                    <HomeScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
