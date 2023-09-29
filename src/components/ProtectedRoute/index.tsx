import { useUser } from '@/contexts/user';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element {
  const { user } = useUser();

  if (!(user.role === 'admin')) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-semibold">Acesso negado</h1>
        <p className="text-xl font-medium">Você não tem acesso a essa página</p>
      </div>
    );
  }

  return children as JSX.Element;
}
