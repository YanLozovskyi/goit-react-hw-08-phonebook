import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;
