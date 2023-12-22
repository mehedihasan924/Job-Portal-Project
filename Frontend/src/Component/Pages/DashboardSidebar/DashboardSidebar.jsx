import React, { useContext, useEffect } from 'react'
import DashboardLogo from './../../../assets/Logo.png'
import { FaThLarge, FaUserAlt, FaPuzzlePiece, FaSign,  FaComments, FaSignOutAlt } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { AiOutlineCaretDown, AiFillBell } from "react-icons/ai";
import '../Dashboard/Dashboard.css'
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
// import { base_url } from '../../../../base_url/Base_url';
import axios from 'axios';
// import { MainContext } from '../../context/PostContext';


const Sidebar = () => {

  // const { account, setAccount } = useContext(MainContext)


  return (

    <>
      <div className='Logo'>
        <img style={{ width: "100%", height: '70px', borderRadius: '0px 10px 0px 10px' }} src={DashboardLogo} alt="" />
      </div>

      <div className='menu mt-3 text-white ' >
        <div className='flex flex-col items-center justify-center text-center mx-auto font-medium bg-blue-600 w-full rounded py-2 mb-3'>
      
        <span className='text-xl text-warning'> Admin</span>
        </div>
        
        <h3 className='text-lg'>Menu</h3>
        <div className='mt-5 '>

          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to={'/dashboard'} className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaThLarge />  Dashboard </i> </span> </Link>

          </div>
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to={'/post-job'} className="dropbtn font-medium  p-2 text-lg  mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <MdAddTask /> Add New Job </i> </span>   </Link>
          </div>
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to={'/myjobs'} className="dropbtn font-medium  p-2 text-lg  mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaSign /> Posted Job </i> </span>   </Link>
          </div>
          {/* <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaUserAlt />  Users </i> </span>  <span  > <AiOutlineCaretDown /> </span> </button>
            <div className="dropdown-content">
              <Link to={'/users/admin'}>Admin</Link>
              <Link to={'/users/moderator'}>Moderator</Link>
              <Link to={'/users/user'}>Users</Link>
              <Link to={'/addnewuser'}>Add New Users</Link>
            </div>
          </div>             */}
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to="/dashboard" className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <BiSolidUserCircle />  Profile </i> </span> </Link>
          </div>
        </div>
      </div>

    </>

  )
}

export default Sidebar


