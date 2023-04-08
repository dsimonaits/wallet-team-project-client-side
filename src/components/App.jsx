import { Routes, Route } from 'react-router-dom';
import Table from './Table/Table';
import Test from './Test';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  );
};
