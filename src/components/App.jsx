import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from '../redux/session/sessionSelectors';
import { refreshUser } from '../redux/session/sessionOperations';
import { fetchTransactions } from '../redux/finance/financeOperations';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Spinner from './Spinner/Spinner';

const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/auth/RegistrationPage'));
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const Table = lazy(() => import('./Table/Table'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const refreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (token && !userLoggedIn) dispatch(refreshUser());
  }, [dispatch, token, userLoggedIn]);

  useEffect(() => {
    if (userLoggedIn && !refreshing) {
      dispatch(fetchTransactions());
    }
  }, [dispatch, userLoggedIn, refreshing]);

  useEffect(() => {
    if (!isMobile && location.pathname === '/currency') {
      navigate('/home');
    }
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [isMobile, navigate, location.pathname]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {!refreshing && (
          <Routes>
            <Route
              exact
              path="login"
              element={
                <PublicRoute restricted redirectTo="/home">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="register"
              element={
                <PublicRoute restricted redirectTo="/home">
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path=""
              element={
                <PrivateRoute redirectTo="/login">
                  <DashboardPage />
                </PrivateRoute>
              }
            >
              <Route
                path="home"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Table />
                  </PrivateRoute>
                }
              />
              <Route
                path="diagram"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Statistics />
                  </PrivateRoute>
                }
              />
              {isMobile && (
                <Route
                  path="currency"
                  element={
                    <PrivateRoute redirectTo="/login">
                      <Currency />
                    </PrivateRoute>
                  }
                />
              )}
            </Route>
            <Route
              path="*"
              element={
                <PublicRoute restricted redirectTo="/login">
                  <RegistrationPage />
                </PublicRoute>
              }
            />
          </Routes>
        )}
      </Suspense>
    </>
  );
};
