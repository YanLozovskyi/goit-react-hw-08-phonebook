import { Outlet } from 'react-router-dom';
import { AppBar, Container, Loader, Section } from 'components';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Section>
            <Container>
              <Outlet />
            </Container>
          </Section>
        </Suspense>
      </main>
    </>
  );
};
