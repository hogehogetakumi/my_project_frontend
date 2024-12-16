import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './src/Signup/Signup';
import LoginComponents from './src/Login/LoginComponents';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginComponents />} />
                <Route path="/login" element={<LoginComponents />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
