import { createBrowserRouter } from 'react-router-dom';
import App from '../Pages/App';
import Home from '../Pages/Home';
import Timeline from '../Pages/Timeline';
import Stats from '../Pages/Stats';
import NotFound from '../Pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
