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
import Allservices from './Pages/Allservices';
import Viewdetails from './Pages/Viewdetails';
import Service from './Components/Service';
import Updateservices from './Pages/Updateservices';
import Manageservices from './Pages/Manageservice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('https://backend-nu-sage-10.vercel.app/services'),
      },
      {
        path:"addservice",
        element:<Privateroute><Addservices></Addservices></Privateroute>
      },
      {
        path:"manageservice",
        element:<Privateroute><Manageservices></Manageservices></Privateroute>,
        loader: () => fetch('https://backend-nu-sage-10.vercel.app/services/')
      },
      {
        path:"update/:id",
        element:<Privateroute><Updateservices></Updateservices></Privateroute>,
        loader: ({params}) => fetch(`https://backend-nu-sage-10.vercel.app/services/$${params._id}`)
      },
      {
        path:"schedules",
        element:<Privateroute><MySchedules></MySchedules></Privateroute>,
        loader:()=>fetch('https://backend-nu-sage-10.vercel.app/booking')
      },
      {
        path:"myservice",
        element:<Privateroute><Myservices></Myservices></Privateroute>,
        loader: () => fetch('https://backend-nu-sage-10.vercel.app/services/')

      },
      {
        path: "viewdetails/:id",
        element: <Privateroute><Viewdetails /></Privateroute>,
        loader: () => fetch('https://backend-nu-sage-10.vercel.app/services/')
      },
      {
        path:"allservices",
        element:<Allservices></Allservices>,
        loader:()=>fetch('https://backend-nu-sage-10.vercel.app/services')
        
      },
      {
        path:"/",
        element:<Service></Service>,
        
        
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
