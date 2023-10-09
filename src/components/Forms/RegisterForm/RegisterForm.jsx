import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  EMailIcon,
  FormWrapper,
  PasswordIcon,
  PersonIcon,
  StyledForm,
  StyledInput,
  StyledLabel,
} from '../Form.style';
import { StyledButton, Title } from 'components';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FormWrapper>
      <Title>Sign up Form</Title>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <PersonIcon />
        </StyledLabel>

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

        <StyledButton type="submit">Sign up</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
};
