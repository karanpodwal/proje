import "bootstrap/dist/css/bootstrap.min.css";

import "./Group.css";


// src/components/Login.js

import React, { useState } from 'react';

const Group = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log('Login with:', email, password);
  };
  return (
    <div className="login-container">
     <div className="welcome-to-digitalflake">
           Welcome to Digitalflake Admin
        </div>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" >Log In</button>
    </form>
    <div className="forgot-password">
        <button className="forgot-password-button">Forgot Password?</button>
      </div>
          <img className="image-289-icon" alt="" src="/image-289@2x.png" />
  </div>
  );
  
};








export default Group;
