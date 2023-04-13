import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import GlobalStoreTest from './GlobalStoreTest/GlobalStoreTest';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/global" element={<GlobalStoreTest />} />
      </Routes>
    </>
  );
};
