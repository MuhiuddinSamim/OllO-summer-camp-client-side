import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home/Home';
import Login from './Components/RegistrationPage/Login/Login';
import SignUp from './Components/RegistrationPage/SignUp/SignUp';
import AuthProvider from './Components/AuthProvider/AuthProvider/AuthProvider';
import Blog from './Components/Blog/Blog';
import PrivateRoutes from './Components/AuthProvider/PrivateRoutes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: 'login',
        element: <Login />
      },


      {
        path: 'signup',
        element: <SignUp />
      },


      {
        path: 'blog',
        element: <PrivateRoutes><Blog/></PrivateRoutes>
      },


      {
        path: '',
        element: '',
      },


      {
        path: '',
        element: '',
      },


      {
        path: '',
        element: '',
      },


      {
        path: '',
        element: '',
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
