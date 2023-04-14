import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import LoginPage from '../pages/auth/LoginPage';
import Table from './Table/Table';
import { Statistics } from './Statistics/Statistics';
import Currency from './Currency/Currency';
import DashboardPage from 'pages/DashboardPage/DashboardPage';

export const App = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMobile && location.pathname === '/currency') {
      navigate('/home');
    }
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [isMobile, navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/registration" element={</>} /> */}
      <Route path="/" element={<DashboardPage />}>
        {isMobile && <Route path="currency" element={<Currency />} />}
        <Route path="home" element={<Table />} />
        <Route path="diagram" element={<Statistics />} />
      </Route>
    </Routes>
  );
};
