import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // Make an API request to your signup endpoint
      // Send username and password in the request
      const response = await fetch("https://project4-backend-eagr.onrender.com/users/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password, re_password:password }),
      });

      if (response.ok) {
        // Signup successful, you can log the user in automatically or display a success message
        // For example, you can redirect the user to the login page
        navigate('/login');
      } else {
        // Handle signup failure, display error message
        // You can set error state and display a message to the user
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
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
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className='button-45' onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
