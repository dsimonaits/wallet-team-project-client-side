import { Routes, Route } from 'react-router-dom';
import Logo from './Logo/Logo';
import Table from './Table/Table';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/test" element={'Тэст компонент'} />
        <Route path="/dashboard" element={<Table />} />
      </Routes>
    </>
  );
};
