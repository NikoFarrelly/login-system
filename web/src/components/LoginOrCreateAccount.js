import React,{useState} from "react";
import {Login} from "./Login";
import {CreateAccount} from "./CreateAccount";

export const LoginOrCreateAccount = () => {
    const [showLogin, setShowLogin] = useState(false);

    return showLogin ? <Login /> : <CreateAccount/>
}
