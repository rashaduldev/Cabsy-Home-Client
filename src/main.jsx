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
import MySchedules from './Pages/MySchedules';
import Myservices from './Pages/Myservices';
import Errorpage from './Pages/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
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
        path:"schedules",
        element:<Privateroute><MySchedules></MySchedules></Privateroute>
      },
      {
        path:"myservice",
        element:<Privateroute><Myservices></Myservices></Privateroute>
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
