import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { NotUser } from '@/components/ProtectedRoute/NotUser';
import { AccessDenied } from '@/components/ProtectedRoute/AccessDenied';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute permission="user" erroElement={<NotUser />}>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: '/login', element: <Login /> },
      {
        path: '/signup',
        element: (
          <ProtectedRoute permission="admin" erroElement={<AccessDenied />}>
            <Signup />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
