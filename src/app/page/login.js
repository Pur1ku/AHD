// pages/index.js
import LoginForm from '../components/login';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Login Page</h1>
        <LoginForm />
      </main>
    </div>
  );
}
