import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import SectionTitle from '../ui/SectionTitle';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <SectionTitle content="Вход в систему" />
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
