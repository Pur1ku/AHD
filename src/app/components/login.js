// components/LoginForm.js
import { useForm } from 'react-hook-form';

import React from 'react'

export default function LoginForm() {
  return (
    const LoginForm = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
  )
}


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputContainer}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register('username', { required: true })}
          />
          {errors.username && <p style={styles.error}>Username is required</p>}
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p style={styles.error}>Password is required</p>}
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
