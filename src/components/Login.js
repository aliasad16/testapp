import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // To navigate after login

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            if (response.status === 200) {
                setIsAuthenticated(true);  // Update authentication status
                localStorage.setItem('token', response.data.token); // Store token
                navigate('/');  // Redirect to home page
            }
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 text-gray-900 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 text-gray-900 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full py-3 bg-[#1DB954] text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
