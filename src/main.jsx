import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import EstateDtails from './Components/Estate/EstateDtails';
import AuthProvider from './ContextApi/AuthProvider/AuthProvider';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('/fakeData.json'),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estateDetails/id/:Id",
        element: <PrivateRoute><EstateDtails></EstateDtails></PrivateRoute>,
        loader: () => fetch(`/fakeData.json`),
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/about",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
