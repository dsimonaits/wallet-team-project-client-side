import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from '../redux/session/sessionSelectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to={redirectTo} />;
};
