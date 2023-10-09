import styled from 'styled-components';
import { GiExitDoor } from 'react-icons/gi';

export const ProfileWrap = styled.div`
  width: 500px;
  height: 420px;
  padding: 30px 20px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  margin: 30px auto;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  gap: 5px;
  background: rgba(0, 0, 0, 0.222);
  border: 2px solid hsla(0, 0%, 100%, 0.5);
  border-radius: 10px;
  height: 180px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const LogoutIcon = styled(GiExitDoor)`
  font-size: 22px;
  width: 30px;
`;

export const LogOutButton = styled.button`
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
