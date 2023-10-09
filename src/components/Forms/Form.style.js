import styled from 'styled-components';
import { AiFillLock, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 400px;
  padding: 50px;
  backdrop-filter: blur(15px);
  border: 2px solid hsla(0, 0%, 100%, 0.5);
  border-radius: 20px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
  gap: 5px;

  &:focus-within {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  max-width: 100%;
  padding: 10px 15px;
`;

export const PersonIcon = styled(BsPerson)`
  fill: #000;
  position: absolute;
  right: 5px;
  top: 30px;
  width: 20px;
  height: 20px;
`;

export const TelephoneIcon = styled(AiOutlinePhone)`
  fill: #000;
  position: absolute;
  right: 5px;
  top: 30px;
  width: 20px;
  height: 20px;
`;
export const PasswordIcon = styled(AiFillLock)`
  fill: #000;
  bottom: 12px;
  position: absolute;
  right: 5px;
  width: 20px;
  height: 20px;
`;
export const EMailIcon = styled(AiOutlineMail)`
  fill: #000;
  bottom: 12px;
  position: absolute;
  right: 5px;
  width: 20px;
  height: 20px;
`;

export const LoginIcon = styled(BiLogIn)`
  font-size: 22px;
  width: 30px;
`;

export const LoginButton = styled.button`
  width: 100px;
  margin: 0 auto;
  padding: 15px 0;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  transition: background-color 250ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
