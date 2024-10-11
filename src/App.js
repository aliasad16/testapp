import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logout = () => {
        setIsAuthenticated(false); // Clear authentication status
        localStorage.removeItem('token'); // Remove token from local storage
    };

    return (
        <Router>
            <div className="App">
                {/* Navigation */}
                <nav className="p-6 bg-black shadow-lg sticky top-0 z-50">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                        <Link to="/" className="text-4xl font-extrabold text-white tracking-wide hover:text-[#1DB954] transition duration-300">
                            MusicHub
                        </Link>
                        <ul className="flex space-x-8">
                            <li>
                                <Link to="/" className="text-lg text-white hover:text-[#1DB954] transition duration-200 transform hover:scale-105">
                                    Home
                                </Link>
                            </li>
                            {!isAuthenticated ? (
                                <>
                                    <li>
                                        <Link to="/login" className="text-lg text-white hover:text-[#1DB954] transition duration-200 transform hover:scale-105">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className="text-lg text-white hover:text-[#1DB954] transition duration-200 transform hover:scale-105">
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <button
                                        onClick={logout}
                                        className="text-lg text-white hover:text-[#1DB954] transition duration-200 transform hover:scale-105"
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
