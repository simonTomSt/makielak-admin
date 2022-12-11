import { useAuth } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Role } from '../../api';
import { Routes } from '../routes';

type ProtectedRouteProps = { roles?: Role[]; children: JSX.Element };

export const ProtectedRoute = ({
  roles = [],
  children,
}: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={Routes.login} replace />;
  }

  if (roles.length && !roles.includes(user?.role)) {
    return <Navigate to={Routes.login} replace />;
  }

  return children;
};
