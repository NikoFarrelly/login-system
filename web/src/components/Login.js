import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

import {SERVER_URL} from "../constants";

import "./Login.css";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const history = useHistory();

    const onSubmit = (evt) => {
        evt.preventDefault();
        axios.post(`${SERVER_URL}/login`, {
            username,
            password
        })
            .then(res => {
                if (res.data.success) {
                    history.push('/home', {username});
                } else {
                    setLoading(false);
                }
            })
            .catch(error => {
                throw error;
            })
    }

    return (
        <div className={"login_container"}>
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
                <button className={"button"} onClick={onSubmit}>{isLoading ? "Loading.." : "Log in"}
                </button>
            </div>
            <div className={"create_account_container"}>
                <button className={"button"} onClick={() => history.push('/create-account')}>
                    Create account
                </button>
            </div>
        </div>
    )
}
