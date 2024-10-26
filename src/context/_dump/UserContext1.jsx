import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../../authappwrite';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initializeUser = async () => {
            const userData = await getUser();
            setUser(userData);
        };

        initializeUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
