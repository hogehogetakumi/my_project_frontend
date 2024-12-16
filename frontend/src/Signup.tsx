import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, email }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Signup successful:', data);
                alert('Signup successful!');
            } else {
                console.log('Signup failed', response);
                alert('Signup failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('An error occurred during Signup:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignup();
                }}
                style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}
            >
                <h1>Signup</h1>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit" style={{ marginTop: '10px' }}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
