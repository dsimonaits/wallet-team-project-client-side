import { Routes, Route } from 'react-router-dom';
import Logo from './Logo/Logo';

import Table from './Table/Table';
import GlobalStoreTest from './GlobalStoreTest/GlobalStoreTest';
import { Statistics } from './Statistics/Statistics';
import Balance from './Balance/Balance';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/test" element={'Тэст компонент'} />
        <Route path="/dashboard" element={<Table />} />
        <Route path="/global" element={<GlobalStoreTest />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </>
  );
};
