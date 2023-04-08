import { Routes, Route } from 'react-router-dom';
import Test from './Test';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </>
  );
};
