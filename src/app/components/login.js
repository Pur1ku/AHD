import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css'; // Example CSS file for styling

const LoginForm = () => {


  return (
    <div className="login-form-container">
      <form >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
          
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
        
        
          />
         
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
