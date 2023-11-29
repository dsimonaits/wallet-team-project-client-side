import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from '../redux/session/sessionSelectors';
import { refreshToken } from '../redux/session/sessionOperations';
import { fetchTransactions } from '../redux/finance/financeOperations';
import { PublicRoute } from '../Routes/PublicRoute';
import { PrivateRoute } from '../Routes/PrivateRoute';
import Spinner from './UI/Spinner/Spinner';
import ConnectingToDB from './UI/ConnectingToDB/ConnectingToDB';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const Table = lazy(() => import('./UI/Table/Table'));
const Statistics = lazy(() => import('./UI/Statistics/Statistics'));
const Currency = lazy(() => import('./UI/Currency/Currency'));

const theme = extendTheme({});

export const App = () => {
  const [connectingToDB, setConnectingToDB] = useState(false);

  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();

  const dispatch = useDispatch();

  const userLoggedIn = useSelector(selectIsLoggedIn);

  const refreshing = useSelector(selectIsRefreshing);

  const token = useSelector(selectToken);

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refreshing && setConnectingToDB(true);
    }, 5000);

    if (!refreshing) {
      clearTimeout(timeoutId);
      setConnectingToDB(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [refreshing]);

  useEffect(() => {
    if (token && !userLoggedIn) {
      dispatch(refreshToken());
    }

    if (token && userLoggedIn) {
      dispatch(fetchTransactions());
    }
  }, [dispatch, token, userLoggedIn]);

  useEffect(() => {
    if (!isMobile && location.pathname === '/currency') {
      navigate('home');
    }
    // if (location.pathname === '/') {
    //   navigate('home');
    // }
  }, [isMobile, navigate, location.pathname]);

  return (
    <>
      {connectingToDB ? (
        <ChakraProvider theme={theme}>
          <ConnectingToDB />
        </ChakraProvider>
      ) : null}
      {refreshing ? <Spinner /> : null}

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <PublicRoute restricted redirectTo="/">
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
              path="/"
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
              <PublicRoute restricted redirectTo="/">
                <LoginPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
