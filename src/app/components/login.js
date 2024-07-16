import React from 'react';
import { useForm } from 'react-hook-form';
<<<<<<< HEAD

import React from 'react'

export default function LoginForm() {
  return (
    const LoginForm = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
  )
}

=======
import './LoginForm.css'; // Example CSS file for styling

const LoginForm = () => {
>>>>>>> 6696f8de2a10ac925e142ff302200c5a078bd327


  return (
<<<<<<< HEAD
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputContainer}>
=======
    <div className="login-form-container">
      <form >
        <div className="form-group">
>>>>>>> 6696f8de2a10ac925e142ff302200c5a078bd327
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
          
          />
<<<<<<< HEAD
          {errors.username && <p style={styles.error}>Username is required</p>}
        </div>
        <div style={styles.inputContainer}>
=======
         
        </div>
        <div className="form-group">
>>>>>>> 6696f8de2a10ac925e142ff302200c5a078bd327
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
        
        
          />
<<<<<<< HEAD
          {errors.password && <p style={styles.error}>Password is required</p>}
=======
         
>>>>>>> 6696f8de2a10ac925e142ff302200c5a078bd327
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '0 0.5rem',
  },
  inputContainer: {
    marginBottom: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
  },
};

export default LoginForm;
