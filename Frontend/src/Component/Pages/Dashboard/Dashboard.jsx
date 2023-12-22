import React from 'react';
import { FaThLarge, FaUserAlt, FaPuzzlePiece, FaSign } from "react-icons/fa";
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import adminImg from '../../../assets/hasan.jpg'
import './Dashboard.css'
const Dashboard = ({children}) => {
    return (
        <div className='grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-1 mx-2 h-screen '>
        <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'>
          <DashboardSidebar />
        </div> 
        <div className=' Right-site col-start-2 col-end-6   bg-slate-200'>
          <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  '>
            <h1 className='sm:text-1xl md:text-2xl lg:text-5xl lg:pl-5 '> Admin Dashboard </h1>
            <div className='flex items-center gap-3 font-bold'> <p>Admin</p> <img className='h-[40px] w-[40px] rounded-full mr-5'  src={adminImg} alt="" /></div> 
          </div>
        <div> 
           {children}
          </div>
        </div>
      </div>
    );
};

export default Dashboard;