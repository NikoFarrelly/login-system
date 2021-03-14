import React from 'react';

export const AuthLayout = ({children}) => {
    return (
        <div className={"container"}>
            <p className={"title"}>Welcome</p>

            <div className={"temp-inputs"}>
                {children}
            </div>
        </div>
    )
}
