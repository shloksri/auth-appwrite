// src/Auth.js
import React, { useState, useEffect } from 'react'
import { loginWithGoogle, logoutUser, getUser } from './appwrite/authappwrite.js'
import Login from './components/Login.jsx'
import Logout from './components/Logout.jsx'

const Auth = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkUser = async () => {
            try {
                const userData = await getUser()
                setUser(userData)
            } catch (error) {
                setUser(null)
                console.log("Shlok, no user is there", error)
            }
        }

        checkUser()
    }, [user])

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={logoutUser}>Logout</button>
                </>
            ) : (
                <button onClick={loginWithGoogle}>Login with Google</button>
            )}


        </div>
    )
}

export default Auth

