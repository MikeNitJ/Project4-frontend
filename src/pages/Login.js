import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Make an API request to your login endpoint
      // Send username and password in the request
      const response = await fetch("https://project4-backend-eagr.onrender.com/token/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:username, password }),
      });

      if (response.ok) {
        // Login successful, redirect to the dashboard or another page
        const token = await response.json()
        localStorage.setItem('accessToken', token.auth_token);
        console.log(token);
        navigate('/');
      } else {
        // Handle login failure, display error message
        // You can set error state and display a message to the user
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      
        <input
          type="text"
          name="username"
          placeholder="E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='button-45' onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default Login;
