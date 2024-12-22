import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IntroPage, Landing, SignUp, Logout } from './pages';
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/intro',
    element:<IntroPage />,
  },
  {
    path: '/signup',
    element:<SignUp/>,
  },
  {
    path: '/home',
    element:<HomeLayout/>,
  },
  {
    path: '/logout',
    element:<Logout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;