// pages/Route3.js
import React from 'react';
import { useUser } from '../context/UserContext';
function Route3() {
    const { user } = useUser();
    return <h2>This is Route 3 with user email: {user.email}</h2>;
}

export default Route3;
