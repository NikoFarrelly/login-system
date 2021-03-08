import React from 'react';

import {Login} from "./components/Login";
import {CreateAccount} from "./components/CreateAccount";

import './App.css';

function App() {


    return (
        <div className={"container"}>
            <p className={"title"}>Welcome</p>

            <div className={"temp-inputs"}>
                <Login/>
                <CreateAccount/>
            </div>

        </div>
    );
}

export default App;
