// pages/Route2.js
import React from 'react';
import { useUser } from '../context/UserContext';
function Route2() {
    const { user } = useUser();
    return <h2>Route 2, {user.$id}</h2>;
}

export default Route2;
