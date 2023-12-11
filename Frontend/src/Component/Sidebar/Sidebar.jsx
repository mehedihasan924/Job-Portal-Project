import React from 'react'
import Locatins from './Locatins'
import Salary from './Salary';
import JobPostingData from './JobPostingData';
import WorkExprience from './WorkExprience';
import EmploymentType from './EmploymentType';


const Sidebar = ({haldleChange, haldleClick}) => {
  return (
      <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'> Filters </h3>
          <Locatins haldleChange={haldleChange}/>
          <Salary haldleChange={haldleChange}  haldleClick={haldleClick}/>
          <JobPostingData haldleChange={haldleChange}/>
          <WorkExprience haldleChange={haldleChange}/>
          <EmploymentType haldleChange={haldleChange}/>  
    </div>

  )
}

export default Sidebar;