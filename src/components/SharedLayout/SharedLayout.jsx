import { Outlet } from 'react-router-dom';
import { Section } from './SharedLayout.style';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />

      <Section>
        <Outlet />
      </Section>
    </>
  );
};
