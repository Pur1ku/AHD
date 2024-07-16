// pages/index.js
import LoginForm from '../components/login';
import { CssBaseline, Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <LoginForm />
      </Container>
    </>
  );
}
