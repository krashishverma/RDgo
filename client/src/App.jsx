import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IntroPage, Landing, SignUp } from './pages';
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;