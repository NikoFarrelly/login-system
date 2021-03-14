import React from 'react';
import {CreateAccount} from "../components/CreateAccount";
import {AuthLayout} from "../components/AuthLayout";


export const CreateAccountScreen = () => {

    return (
        <AuthLayout>
            <CreateAccount/>
        </AuthLayout>
    )
}
