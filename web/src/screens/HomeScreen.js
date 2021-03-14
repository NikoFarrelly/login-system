import React from 'react';

import {useHistory, useLocation} from 'react-router-dom';

import './HomeScreen.css';

export const HomeScreen = () => {
    const {state} = useLocation();
    const history = useHistory();
    return (
        <div className={"home_screen_container"}>
            <div className={"welcome_container"}>
                <p className={"welcome_title"}>Welcome {state?.username}</p>
            </div>
            <div className={"sign_out_container"}>
                <p className={"sign_out_text"}>Would you like to sign out?</p>
                <button className={"sign_out_button"} onClick={() => history.push('/')}>Sign out</button>
            </div>
        </div>
    )
}
