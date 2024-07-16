// components/LoginForm.js
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register('username', { required: true })}
          />
          {errors.username && <p className={styles.error}>Username is required</p>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p className={styles.error}>Password is required</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
