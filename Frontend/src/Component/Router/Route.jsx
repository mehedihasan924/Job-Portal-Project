import React from 'react';
import App from '../../App'
import { createBrowserRouter} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Creatjob from '../Pages/Creatjob/Creatjob';
import Myjobs from '../Pages/MyJobs/Myjobs';
import SalaryPage from '../Pages/SalaryPage/SalaryPage';

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
          }
        ]  
    },
  ]);

export default router