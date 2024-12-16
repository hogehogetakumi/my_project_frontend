import React, { useState } from 'react';

const LoginComponents = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('auth_token', data.token);
                console.log('Login successful:', data);
                alert('Login successful!');
            } else {
                console.log('Login failed', response);
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('An error occurred during Login:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
                style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}
            >
                <h1>Login</h1>
                <div>
                    <label htmlFor="username">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginComponents;
