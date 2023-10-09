import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton, StyledNavLink, UserName } from './Nav.style';
import { selectUsername } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <>
      <StyledNavLink to="/profile">User Profile</StyledNavLink>
      <UserName>Welcome, {name}</UserName>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </>
  );
};
