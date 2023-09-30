import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import Statistics from './components/Statistics/Statistics.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:
    [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader:()=> fetch('../places.json')
      },
      {
        path: '/stastistics',
        element: <Statistics></Statistics>,
        loader:()=> fetch('../places.json')
      }


    ]
    

    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
