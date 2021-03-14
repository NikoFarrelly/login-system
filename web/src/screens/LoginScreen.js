import React from 'react';
import {Login} from "../components/Login";
import {AuthLayout} from "../components/AuthLayout";

export const LoginScreen = () => {

    return (
        <AuthLayout>
            <Login/>
        </AuthLayout>
    )
}
