import React, { useState } from 'react'
import Logo from '../../../../public/Image/Spline.png'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaMars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
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
      path:"/myjobs",
      title: "My Jobs"
    },
    {
      path:"/salary",
      title: "Salary Estimate"
    },
    {
      path:"/post-job",
      title: "Post a job"
    }
  ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'> 
      <nav className='flex justify-between items-center py-6'>
        <a className='flex items-center text-2xl text-black font-bold' href="" > <img className='h-[30px] w-[30px]' src={Logo} alt="" />BD JOB</a>
        {/* Menu Bar */}
        <ul className=' hidden md:flex gap-12'>
              {navItems.map(({path, title}) => (
                <li key={path} className='text-base'>
                  <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending": ""
                    }
                  >
                   {title}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* Login SignIn Button */}
            <div className='hidden lg:block lg:flex gap-5'>
             <Link to="/login">  <button  className="btn btn-active btn-neutral">Login</button></Link>
             <Link to="/sign-up"><button  className="btn btn-active btn-primary">Register</button> </Link> 
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
                <li key={path} className="text-white">
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
              <div className='flex gap-2'>
              <Link to="/login">  <button  className="btn btn-active btn-neutral py-0">Login</button></Link>
              <Link to="/sign-up"><button  className="btn btn-active btn-primary">Register</button> </Link> 
              </div>
  
        </ul>
       </div>
    </header>
  )
}

export default Navbar