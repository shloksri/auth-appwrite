// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUser, logoutUser } from '../../authappwrite.js';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    // Initialize from session storage or default to null
    const [user, setUser] = useState(() => {
        const savedUser = sessionStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [isInitialized, setIsInitialized] = useState(false);

    // Check user session on mount if not already in session storage
    useEffect(() => {
        if (!user) {
            // Only fetch if user is not in session storage
            getUser().then((userData) => {
                if (userData) {
                    setUser(userData);
                    sessionStorage.setItem('user', JSON.stringify(userData));
                }
                setIsInitialized(true); // Mark as initialized
            }).catch(() => setIsInitialized(true))
                .finally(() => {
                    setIsInitialized(true); // Mark as initialized regardless of success
                });; // Set as initialized even if fetch fails
        } else {
            setIsInitialized(true); // Set as initialized if user is already in session storage
        }
    }, [user]);

    const handleLogout = async () => {
        await logoutUser();
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, handleLogout, isInitialized }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
