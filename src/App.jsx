import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IntroPage, Landing } from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/intro',
    element:<IntroPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;