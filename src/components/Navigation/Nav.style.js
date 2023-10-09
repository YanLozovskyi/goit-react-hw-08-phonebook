import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;
  font-weight: 600;

  transition: color 250ms ease-in-out;

  &.active {
    color: ${({ theme }) => theme.colors.accentHover};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  font-weight: 600;
  transition: color 250ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }
`;
export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;

  font-weight: 600;
  transition: color 250ms ease-in-out;
`;
