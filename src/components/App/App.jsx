import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout } from 'components';

import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { selectRefreshing } from 'redux/auth/authSelectors';

const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const UserProfile = lazy(() => import('../../pages/UserProfile'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute component={UserProfile} redirectTo="/login" />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute component={Login} redirectTo="/contacts" />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute component={Register} redirectTo="/contacts" />
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};
