import React from 'react';
import { loginWithGoogle, logoutUser } from '../../appwrite/authappwrite';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from '../../.pages/Home';
import Route1 from '../../.pages/Route1';
import Route2 from '../../.pages/Route2';
import Route3 from '../../.pages/Route3';
import Route4 from '../../.pages/Route4';
import { useUser } from '../../context/UserContext';

function MainApp2() {
    const { user, handleLogout, isInitialized } = useUser();

    // Only render login if initialization is complete and no user is present
    if (!isInitialized) {
        return null; // Or show a simple loading spinner if desired
    }

    if (!user) {
        return <button onClick={loginWithGoogle}>Login with Google</button>
    }

    return (
        <Router>
            <div style={{ marginBottom: '20px' }}>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/route1">Route 1</Link> | <Link to="/route2">Route 2</Link> | <Link to="/route3">Route 3</Link> | <Link to="/route4">Route 4</Link>
                    <button onClick={handleLogoutU} style={{ float: 'right' }}>Logout</button>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/route1" element={<Route1 />} />
                <Route path="/route2" element={<Route2 />} />
                <Route path="/route3" element={<Route3 />} />
                <Route path="/route4" element={<Route4 />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );

}

export default MainApp2;
