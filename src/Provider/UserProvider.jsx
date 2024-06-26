import React, {createContext, useContext, useState} from "react";

const UserContext = createContext();

function UserProvider({children}){
    const [authTokenData, setAuthTokenData] = useState(null);
    const [user, setUser] = useState(null);

    const setUserContext = (userData) => {
        setUser(userData);
    }
    let isUserLoggedIn = user;
    const value = {
        user,
        setUserContext,
        isUserLoggedIn,
        authTokenData,
        setAuthTokenData,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}

export default UserProvider;