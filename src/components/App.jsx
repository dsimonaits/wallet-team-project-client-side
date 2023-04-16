import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/session/sessionSelectors';
import { refreshUser } from '../redux/session/sessionOperations';
import { fetchTransactions } from '../redux/finance/financeOperations';
import LoginPage from '../pages/auth/LoginPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import Table from './Table/Table';
import { Statistics } from './Statistics/Statistics';
import Currency from './Currency/Currency';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Spinner from './Spinner/Spinner';

export const App = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();

  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const refreshing = useSelector(selectIsRefreshing);

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

  return (
    <>
      <Spinner />
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
    </>
  );
};
