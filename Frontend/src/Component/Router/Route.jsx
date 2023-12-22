import React from 'react';
import App from '../../App'
import { createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Creatjob from '../Pages/Creatjob/Creatjob';
import Myjobs from '../Pages/MyJobs/Myjobs';
import SalaryPage from '../Pages/SalaryPage/SalaryPage';
import UpdateJob from '../Pages/UpdateJob/UpdateJob';
import Login from '../Pages/Login/Login';
import Jobdetails from '../Pages/JobDetails/Jobdetails';
import Register from '../Pages/Register/Register';
import Applyedjob from '../Pages/Apply/Applyedjob';
import Dashboard from '../Pages/Dashboard/Dashboard';
import App2 from '../../App2';
import DashboardData from '../Pages/Dashboard/DashboardData';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>, 
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
          {
            path: "/salary",
            element:<SalaryPage></SalaryPage>,
          },
          {
            path: "/job/:id",
            element:<Jobdetails></Jobdetails>,
          },
          {
            path: "/applyedjob",
            element:<Applyedjob></Applyedjob>,
          },
        ]  
    },

    {
      path: "/register",
      element:<Register></Register>,
    },
    {
      path: "/login",
      element:<Login></Login>,
    },
    {
      path:"/",
      element:<App2></App2>,
      children:[
        {
          path:"dashboard",
          element:<DashboardData></DashboardData>
        },
        {
          path:"myjobs",
          element:<Myjobs></Myjobs>
        },
        {
          path: "/post-job",
          element: <Creatjob/>,
        },
        {
          path: "edit-job/:id",
          element:<UpdateJob></UpdateJob>,
          loader:({params})=>fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
      ]
    },
   
    
  ]);

export default router