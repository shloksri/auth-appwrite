// src/Auth.js
import React, { useState, useEffect } from 'react'
import { useAuth } from "../../context/AuthContext.jsx";
import Login from '../Login.jsx'
import Logout from '../Logout.jsx'

const MainApp = () => {
    // const [user, setUser] = useState(null)
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()

    return (
        <div>
            {authUser ? <Logout user={authUser} /> : <Login />}
        </div>
    )
}

export default MainApp

//used with AuthContext