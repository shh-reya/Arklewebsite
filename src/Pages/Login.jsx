// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-body">
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="login-label" htmlFor="email">Email ID:</label>
                    <input 
                        className="login-input" 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    
                    <label className="login-label" htmlFor="password">Password:</label>
                    <input 
                        className="login-input" 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
