// pages/Route1.js
import React from 'react';
import { useUser } from '../context/UserContext';

function Route1() {
    const { user } = useUser();
    return <h2>Route 1, {user.name}</h2>;
}

export default Route1;
