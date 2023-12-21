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
            path: "/post-job",
            element: <Creatjob/>,
          },
          {
            path: "/myjobs",
            element: <Myjobs/>,
          },
          {
            path: "/salary",
            element:<SalaryPage></SalaryPage>,
          },
          {
            path: "edit-job/:id",
            element:<UpdateJob></UpdateJob>,
            loader:({params})=>fetch(`http://localhost:3000/all-jobs/${params.id}`)
          },
          {
            path: "/job/:id",
            element:<Jobdetails></Jobdetails>,
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
    
  ]);

export default router