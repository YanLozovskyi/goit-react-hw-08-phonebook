import { Outlet } from 'react-router-dom';
import { Section } from './SharedLayout.style';
import { AppBar, Loader } from 'components';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Section>
            <Outlet />
          </Section>
        </Suspense>
      </main>
    </>
  );
};
