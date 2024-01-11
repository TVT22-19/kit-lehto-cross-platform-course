import {createContext, ReactNode, useContext, useState} from "react";
import {AuthContent} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext<AuthContent | undefined>(undefined);

export const AuthProvider = (props: { children: ReactNode }) => {

    const [token, setToken] = useState("");

    AsyncStorage.getItem("token").then(value => setToken(value || ""))

    const saveToken = (token: string) => AsyncStorage.setItem("token", token).then(() => setToken(token))

    const clearToken = () => AsyncStorage.setItem("token", "").then(() => setToken(""))

    const isAuthorized = !(!token || token === "");

    return (
        <AuthContext.Provider value={{token, saveToken, clearToken, isAuthorized}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);