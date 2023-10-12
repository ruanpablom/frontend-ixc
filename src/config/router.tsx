import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home, Login, Signup, Profile } from '@/pages';
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
          <ProtectedRoute permission="USER" erroElement={<NotUser />}>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: '/login', element: <Login /> },
      {
        path: '/signup',
        element: (
          <ProtectedRoute permission="ADMIN" erroElement={<AccessDenied />}>
            <Signup />
          </ProtectedRoute>
        ),
      },
      {
        path: '/me',
        element: (
          <ProtectedRoute permission="USER" erroElement={<NotUser />}>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
