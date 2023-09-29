import { useUser } from '@/contexts/user';
import { UserRole } from '@/models/user';
import { verifyRole } from '@/utils/verifyRole';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
  permission: UserRole;
  erroElement: ReactNode;
};

export function ProtectedRoute({
  children,
  erroElement,
  permission,
}: ProtectedRouteProps): JSX.Element {
  const { user } = useUser();

  if (verifyRole(permission, user.role)) {
    return children as JSX.Element;
  }
  return erroElement as JSX.Element;
}
