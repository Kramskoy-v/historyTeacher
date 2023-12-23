import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import ButtonLink from '../../ui/ButtonLink';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('ivanhotepp@gmail.com');
  const [password, setPassword] = useState('c3po');
  const { login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit} type="login">
      <div>
        <FormRow label="Логин">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRow>
        <FormRow label="Пароль">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
      </div>
      <div>
        <ButtonLink mla="mla" to="/home">
          На главную
        </ButtonLink>
        <Button title="Войти" />
      </div>
    </Form>
  );
}

export default LoginForm;
