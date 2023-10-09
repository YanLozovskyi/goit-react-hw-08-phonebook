import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100px;
  padding: 15px 0;
  display: block;
  margin: 0 auto;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;
