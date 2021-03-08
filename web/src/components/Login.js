import React, {useState} from "react";
import axios from "axios";

import {SERVER_URL} from "../constants";

import "./Login.css";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios
            .post(`${SERVER_URL}/login`, {
                username,
                password
            })
            .then(res => {
                console.log('response:', res)
            })
            .catch(error => {
                console.error(error)
            }).finally(() => {
            console.log('finished with request');
        })
    }

    return (
        <div className={"login_container"}>
            <p className={"login_title"}>Login</p>
            <div className={"input_container"}>
                <div className={"input_row"}>
                    <p className={"input_title"}>Username</p>
                    <input type={"text"} className={"login_input"} onChange={e => setUsername(e.target.value)}
                           value={username}/>
                </div>
                <div className={"input_row"}>
                    <p className={"input_title"}>Password</p>
                    <input className={"login_input"} type={"password"} onChange={e => setPassword(e.target.value)}
                           value={password}/>
                </div>
            </div>
            <div className={"button_container"}>
                <button className={"button"} onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}
