import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/Main';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default AppRoutes;
