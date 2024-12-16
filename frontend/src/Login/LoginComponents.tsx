import React, { useState } from 'react';
import './LoginComponents.css';

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
        <div className="login">
            <div className="login-screen">
                <div className="app-title">
                    <h1>Login</h1>
                </div>

                <form
                    className="login-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                >
                    <div className="control-group">
                        <input
                            type="text"
                            className="login-field"
                            placeholder="username"
                            id="login-name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                    </div>

                    <div className="control-group">
                        <input
                            type="password"
                            className="login-field"
                            placeholder="password"
                            id="login-pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                    </div>

                    <button className="btn btn-primary btn-large btn-block" type="submit">
                        Login
                    </button>
                </form>

                <a className="login-link" href="#">
                    Lost your password?
                </a>

                <a className="signup-link" href="/signup">
                    New user? Sign up here!
                </a>
            </div>
        </div>
    );
};

<style scope>

</style>

export default LoginComponents;
