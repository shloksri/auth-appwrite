// pages/Home.js
import React from 'react';
import { useUser } from '../context/UserContext';

function Home() {
    const { user } = useUser();
    return <h2>Welcome, {user.name}!</h2>;
}

export default Home;
