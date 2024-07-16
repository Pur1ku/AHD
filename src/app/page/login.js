// pages/index.js
import LoginForm from '../components/login';
import { CssBaseline, Container } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Login Page</h1>
        <LoginForm />
      </Container>
    </>
  );
}
