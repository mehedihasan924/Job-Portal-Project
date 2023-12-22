import React, { useContext, useState } from 'react'
import Logo from '../../../../public/Image/siteLogo.png'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaMars, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../../Provaider/AuthProvaiders';
import { FaUserCircle } from 'react-icons/fa';
import './././../Dashboard/Dashboard.css'
const Navbar = () => {
  const {user, logOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
}
 console.log(user);
  const [isMenuOpen, setIsMenuOpen]=useState();
  const hanldleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems=[
    {
      path:"/",
      title: "Start a sreach"
    },
    {
      path:"/applyedjob",
      title: "Applyed"
    },
    {
      path:"/salary",
      title: "Salary Estimate"
    },
   
  ]
 
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-primary'> 
      <nav className='flex justify-between items-center py-4'>
        <a className='flex items-center gap-3 text-2xl text-white font-bold' href="" > <img className='h-[35px] w-[40px]' src={Logo} alt="" />BD JOB</a>
        {/* Menu Bar */}
        <ul className=' hidden md:flex gap-12'>
              {navItems.map(({path, title}) => (
                <li key={path} className='text-base text-white'>
                  <NavLink
                    to={path}
                    className={ ({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending": ""
                    }
                  >
                   {title}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* Login SignIn Button */}
            <div className='hidden lg:block lg:flex gap-5 items-center'>
              { 
                user ?  <img style={{borderRadius:"50%", height: "40px ", width:"40px"}} src={user.photoURL}  alt="" /> :
                <FaUserCircle style={{fontSize: "2rem"}}/>
                
              }                     
              {
                user ?  <button onClick={handleLogOut}  className="btn btn-active bg-white">Logout</button>:
                <Link to="/login"> <button  className="btn btn-active bg-white">Login</button></Link>
              }   
             </div> 
             {/* Mobile Menu */}
             <div className='md:hidden block'> 
              <button onClick={hanldleMenu}>
                 { 
                 isMenuOpen ? <FaXmark  className='w-5 h-5 text-primary' />:<FaBarsStaggered className='w-5 h-5 text-primary'/>
                 } 
              </button>
             </div>
      </nav>
       {/* Toggole Menu Items Mobile*/}
       <div className={`transition duration-700 px-4 bg-black py-5 rounded-sm md:hidden block ${isMenuOpen  ? "": "hidden"}`}>
        <ul>
        {navItems.map(({path, title}) => (
                <li key={path} className="">
                  <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive  ? "active" : isPending ? "pending": ""
                    }
                  >
                   {title}
                  </NavLink>
                </li>
                
              ))}
              <div className='flex gap-2 items-center'>
              { 
                user ? <img style={{borderRadius:"50%", height: "40px ", width:"40px"}} src={user.photoURL}  alt="" /> :
                <FaUserCircle style={{fontSize: "2rem"}}/>
              }                     
              {
                user ?  <Link to="/register"> <button onClick={handleLogOut}  className="btn btn-active btn-primary">Logout</button></Link>:
                <Link to="/login"> <button  className="btn btn-active btn-primary">Login</button></Link>
              } 
              </div>
  
        </ul>
       </div>
    </header>
  )
}

export default Navbar