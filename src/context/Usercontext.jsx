import { useState } from "react";
import { UserContext } from "./authContext";

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    const [user,setUser] = useState(null);

    const login = () => {
        setToken(true);
    };

    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{ token, login, logout, user, setUser }}>
            {children}
        </UserContext.Provider>
    );

};
