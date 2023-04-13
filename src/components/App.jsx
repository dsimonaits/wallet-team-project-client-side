import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import Logo from './Logo/Logo';
import Table from './Table/Table';
import GlobalStoreTest from './GlobalStoreTest/GlobalStoreTest';
import Balance from './Balance/Balance';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Logo />} />
        <Route path="/test" element={'Тэст компонент'} />
        <Route path="/dashboard" element={<Table />} />
        <Route path="/global" element={<GlobalStoreTest />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </>
  );
};
