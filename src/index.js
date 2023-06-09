import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

import Login from './Components/RegistrationPage/Login/Login';
import SignUp from './Components/RegistrationPage/SignUp/SignUp';
import AuthProvider from './Components/AuthProvider/AuthProvider/AuthProvider';
import Blog from './Components/Blog/Blog';
import PrivateRoutes from './Components/AuthProvider/PrivateRoutes/PrivateRoutes';
import Home from './Components/Home/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import InstructorAdd from './Components/InstructorPage/InstructorAdd/InstructorAdd';
import InstructorPage from './Components/InstructorPage/InstructorPage/InstructorPage';
import Class from './Components/Class/Class/Class';
import DashBoard from './Components/Layout/DashBoard/DashBoard';
import Instructor from './Components/InstructorPage/Instructor/Instructor';
import ClassAdd from './Components/Class/ClassAdd/ClassAdd';
import Users from './Components/Layout/AdminDashboard/Users/Users';
import ClassUpdate from './Components/Class/ClassUpdate/ClassUpdate';
import MyClass from './Components/Class/MyClass/MyClass';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
        element: <PrivateRoutes><Blog /></PrivateRoutes>
      },



      {
        path: 'Instructor',
        element: <InstructorPage></InstructorPage>
      },

      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
    ]
  },

  {
    path: 'DashBoard',
    errorElement: <ErrorPage />,
    element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
    children: [
      {
        path: 'instructorAdmin',
        element: <Instructor></Instructor>
      },

      {
        path: 'instructorAdd',
        element: <InstructorAdd />
      },

      {
        path: 'class',
        element: <Class></Class>
      },

      {
        path: 'classAdd',
        element: <ClassAdd></ClassAdd>
      },

      {
        path: 'classUpdate/:id',
        element: <ClassUpdate></ClassUpdate>,
      },

      {
        path: 'users',
        element: <Users></Users>
      },





    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
