import React from 'react'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import {Link} from 'react-router-dom'
export const Card = ({data}) => {
  const {_id,companyName,jobTitle, image , minPrice ,salaryType, jobLocation,postingDate,  experienceLevel, employmentType,description, maxPrice}=data;

  
  return (
    <div>
      <section className='card'>
         <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start' >
            <img className='max-w-[80px]' src={image} alt="" />
            <div>
              <h4 className='text-primary mb-1 font-bold'>{companyName}</h4>
              <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                 <div className='text-gray-500 text-base flex flex-wrap gap-2 mb-2' >
                    <span className='flex items-center gap-1'><FiMapPin/>  {jobLocation}</span>
                    <span className='flex items-center gap-1'><FiClock/> {employmentType}</span>
                    <span className='flex items-center gap-1'><FiDollarSign/> {minPrice}-{maxPrice}</span>
                    <span className='flex items-center gap-1'><FiCalendar/> {postingDate}</span>          
                </div>
                <p className='text-base text-gray-500'>   {description.length < 250 ? <>{description}  </> : <>{description.slice(0, 100)}...<Link to={`/job/${_id}`}>Read More </Link> </>}</p>  
            </div>
         </Link>
      </section>

    </div>
  )
}
