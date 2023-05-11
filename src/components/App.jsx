import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './AppRoutes';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <b>Refreshing user...</b> : <AppRoutes />;
};

export default App;
