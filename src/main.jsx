import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Root from './Root/Root';
import Login from './Pages/Login';
import Registation from './Pages/Registation';
import Authprovider from './Provider/Authprovider';
// eslint-disable-next-line no-unused-vars
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addservices from './Pages/Addservices';
import Privateroute from './Routes/Privateroute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"addservice",
        element:<Privateroute><Addservices></Addservices></Privateroute>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"registation",
        element:<Registation></Registation>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>,
)
