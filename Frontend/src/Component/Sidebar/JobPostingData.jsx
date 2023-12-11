import React from 'react'
import InputField from './InputField'

const JobPostingData = ({haldleChange}) => {
    const now= new Date();
    
    const twentyFourHoursAgo=new Date(now -24 *60 * 60* 1000);
    const sevenDays=new Date(now -7* 24 * 60*60* 1000);
    const ThirtyDays=new Date(now -30* 24 * 60*60* 1000);

   const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0 ,10);
   const sevenDaysDate=sevenDays.toISOString().slice(0 ,10);
   const ThirtyDaysDate=ThirtyDays.toISOString().slice(0 ,10);

  return (
    <div>
           <h4 className='text-lg font-medium mb-2'> Data of Posting</h4>
           <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='text' value="" onChange={haldleChange}/>
                    <span className='checkmark'></span> All Time
                </label>
                <InputField haldleChange={haldleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="test" />
                <InputField haldleChange={haldleChange} value={sevenDaysDate} title="Last 7 Days" name="test" />
                <InputField haldleChange={haldleChange} value={ThirtyDaysDate} title="Last Mouth" name="test" />                          
            </div>
    </div>

  )
}

export default JobPostingData