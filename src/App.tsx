import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { UserProvider } from './contexts/user';

function App(): JSX.Element {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
