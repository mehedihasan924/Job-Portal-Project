import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'
const NewsLetter = () => {
  return (
    <div>
        <div> 
            <h3 className='text-lg font-bold  mb-2  flex items-center gap-2'> 
            <FaEnvelopeOpenText/>
            Get noticed faster </h3>
            <p className='text-primary/75 text-base mb-4 ' > Ut esse  eiusmod auto. Sit enim labore dolore . Auto ea fugiat commodo es foes.</p>
            <div>
              <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 mb-1 border fucus:outline-none' />
              <input type="submit" value={"Subscribe"} placeholder='name@gmail.com' className='w-full block py-2 pl-3 border fucus:outline-none bg-blue rounded-sm text-white  cursor-pointer  font-semibold' />
            </div>        
        </div>

    {/* 2nd Section */}
    <div className='mt-20'> 
            <h3 className='text-lg font-bold  mb-2  flex items-center gap-2'> 
            <FaRocket/>
            Email me for jobs </h3>
            <p className='text-primary/75 text-base mb-4 ' > Ut esse  eiusmod auto. Sit enim labore dolore . Auto ea fugiat commodo es foes.</p>
            <div className='w-full space-y-4'>           
              <input type="submit" value={"Upload Your Resume"}  className='w-full block py-2 pl-3 border fucus:outline-none bg-blue rounded-sm text-white  cursor-pointer  font-semibold' />
            </div>        
        </div>
    </div>
  );
}

export default NewsLetter