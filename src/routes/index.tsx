import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Dashboard</div>,
  },
  {
    path: '/tasks',
    element: <div>Tasks</div>,
  },
  {
    path: '/projects',
    element: <div>Projects</div>,
  },
  {
    path: '/account',
    element: <div>Account</div>,
  },
]);

export default router;
