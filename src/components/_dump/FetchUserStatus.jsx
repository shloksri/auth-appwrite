import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { getUser } from '../../authappwrite.js'


const FetchUserStatus = () => {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()

    useEffect(() => {
        const checkUser = async () => {
            try {
                const userData = await getUser()
                setAuthUser(userData)
            } catch (error) {
                setAuthUser(null)
                console.log("Shlok, no user is there", error)
            }
        }

        checkUser()
    }, [authUser])

    return (
        <>
            <br />
            Fetch User Status: {authUser ? "Logged IN" : "------LOGGED OUT-------"}
        </>
    )
}

export default FetchUserStatus