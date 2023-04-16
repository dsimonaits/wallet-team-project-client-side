import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import {
  selectToken,
  selectIsLoggedIn,
} from '../redux/session/sessionSelectors';
import { selectTransactions } from '../redux/finance/financeSelectors';
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
  const tokenExists = useSelector(selectToken);
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const transactions = useSelector(selectTransactions);
  const cachedResponse = JSON.parse(localStorage.getItem('persist:session'));
  const navigate = useNavigate();

  useEffect(() => {
    if (cachedResponse.token === true) dispatch(refreshUser());
  });

  useEffect(() => {
    if (!tokenExists) {
      navigate('/login');
    }

    if (tokenExists && transactions.length === 0) {
      dispatch(fetchTransactions());
    }
  }, [dispatch, tokenExists, navigate, transactions]);

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
        {userLoggedIn && (
          <Route
            path="/"
            element={
              <PrivateRoute restricted redirectTo="/login">
                <DashboardPage />
              </PrivateRoute>
            }
          >
            {isMobile && (
              <Route
                path="currency"
                element={
                  <PrivateRoute restricted redirectTo="/login">
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
        )}
      </Routes>
    </>
  );
};
