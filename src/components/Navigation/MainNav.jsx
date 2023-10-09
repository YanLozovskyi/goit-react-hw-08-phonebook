import { useSelector } from 'react-redux';
import { StyledLink, StyledNavLink } from './Nav.style';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StyledLink to="/">PHONEBOOK</StyledLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </>
  );
};
