import { Title } from 'components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  EMailIcon,
  FormWrapper,
  LoginButton,
  LoginIcon,
  PasswordIcon,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../Form.style';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrapper>
      <Title>Sign in Form</Title>

      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Email
          <StyledInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <EMailIcon />
        </StyledLabel>

        <StyledLabel>
          Password
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <PasswordIcon />
        </StyledLabel>

        <LoginButton type="submit">
          Login <LoginIcon />
        </LoginButton>
      </StyledForm>
    </FormWrapper>
  );
};
