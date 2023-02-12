import { createContext } from "react";

export const AuthContext = createContext({
    isLogIn: false, 
    login:() => {}, 
    logout:() => {} 
});