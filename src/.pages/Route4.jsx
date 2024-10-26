// pages/Route4.js
import React from 'react';
import { useUser } from '../context/UserContext';
function Route4() {
    const { user } = useUser();
    return <h2>This is Route 4 - User phoneVerification: {user.phoneVerification}</h2>;
}

export default Route4;
