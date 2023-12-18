import React from 'react';
import App from '../../App'
import { createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Creatjob from '../Pages/Creatjob/Creatjob';
import Myjobs from '../Pages/MyJobs/Myjobs';
import SalaryPage from '../Pages/SalaryPage/SalaryPage';
import UpdateJob from '../Pages/UpdateJob/UpdateJob';

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
          }
        ]  
    },
  ]);

export default router