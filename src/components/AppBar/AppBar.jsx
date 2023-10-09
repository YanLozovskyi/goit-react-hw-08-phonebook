import { AuthNav, MainNav, UserMenu, Container } from 'components';
import { Header, NavWrap, Wrap } from './AppBar.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Container>
        <NavWrap>
          <Wrap>
            <MainNav />
          </Wrap>
          <Wrap>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Wrap>
        </NavWrap>
      </Container>
    </Header>
  );
};
