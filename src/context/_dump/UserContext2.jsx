import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUser } from '../../authappwrite';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initializeUser = async () => {
            try {
                const sessionUser = sessionStorage.getItem('user');
                if (sessionUser) {
                    setUser(JSON.parse(sessionUser));
                } else {
                    const userData = await getUser();

                    if (userData) { // Check if valid data is returned
                        setUser(userData);
                        sessionStorage.setItem('user', JSON.stringify(userData));
                    } else {
                        console.log("No user session found. Redirecting to login.");
                        setUser(null); // Explicitly set to null if no session exists
                    }
                }
            } catch (error) {
                console.error("Error fetching user data: ", error);
                setUser(null); // Handle error by clearing user session
            }
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
