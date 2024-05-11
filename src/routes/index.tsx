import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PepperStdio from '../pages/PepperStdio';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pepper-stdio',
    element: <PepperStdio />,
  },
]);

export default routes;
