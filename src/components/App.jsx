import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/session/sessionSelectors';
import { selectIsLoading } from '../redux/global/globalSelectors';
import { modalsIsOpen } from '../redux/global/globalSelectors';
import { refreshUser } from '../redux/session/sessionOperations';
import { fetchTransactions } from '../redux/finance/financeOperations';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Spinner from './Spinner/Spinner';

const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/auth/RegistrationPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const Table = lazy(() => import('./Table/Table'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const refreshing = useSelector(selectIsRefreshing);
  const isModalIsOpen = useSelector(modalsIsOpen);
  const isGLobalLoading = useSelector(selectIsLoading);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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

  useEffect(() => {
    if (!isGLobalLoading) {
      const section = document.getElementById('blur');
      isModalIsOpen && section.classList.add('blur');
      !isModalIsOpen && section.classList.remove('blur');
    }
  });

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {!refreshing && (
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute restricted redirectTo="/home">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/home">
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login">
                  <DashboardPage />
                </PrivateRoute>
              }
            >
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
