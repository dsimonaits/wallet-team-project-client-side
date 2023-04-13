import { Routes, Route } from 'react-router-dom';
import Logo from './Logo/Logo';
import GlobalStoreTest from './GlobalStoreTest/GlobalStoreTest';
import Balance from './Balance/Balance';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/global" element={<GlobalStoreTest />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </>
  );
};
