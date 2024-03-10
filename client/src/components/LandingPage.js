import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to Your Finance App</h1>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default LandingPage;
