import React, {useState} from "react";
import {Provider} from "./AuthContext";

type AuthProviderProps = {
    children?: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {

    const [user, setUser] = useState(undefined)

    const values = {
        user
    }

    return <Provider value={values}>{children}</Provider>
}