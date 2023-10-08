import { StyledLink, StyledNavLink } from './Nav.style';

export const MainNav = () => {
  return (
    <>
      <StyledLink to="/">PHONEBOOK</StyledLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </>
  );
};
