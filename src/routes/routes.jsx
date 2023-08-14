import { createBrowserRouter } from 'react-router-dom';
import components from './compoenents';
import App from '../App';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <components.dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/marketplace',
        element: (
          <PrivateRoute>
            <components.marketplace />
          </PrivateRoute>
        ),
      },
      {
        path: '/portfolio',
        element: (
          <PrivateRoute>
            <components.portfolio />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <components.notfound />,
  },
]);

export default router;
