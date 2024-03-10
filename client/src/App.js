import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
