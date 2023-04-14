import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import mediaQueries from 'utils/media';
import { useMediaQuery } from '@mui/material';
import LoginPage from '../pages/auth/LoginPage';
import Table from './Table/Table';
import Currency from './Currency/Currency';
import DashboardPage from 'pages/DashboardPage/DashboardPage';

export const App = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMobile && location.pathname === '/home/currency') {
      navigate('/home');
    }
  }, [isMobile, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/registration" element={</>} /> */}
      <Route path="/home" element={<DashboardPage />}>
        {isMobile && <Route path="currency" element={<Currency />} />}
        <Route index element={<Table />} />
      </Route>
    </Routes>
  );
};
