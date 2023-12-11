import React from 'react'
import InputField from './InputField'

const EmploymentType = ({haldleChange}) => {
  return (
    <div >
    <h4 className='text-lg font-medium mb-2'> Type Of Employment</h4>
    <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='text' value="" onChange={haldleChange}/>
            <span className='checkmark'></span>Any experience
        </label>
        <InputField haldleChange={haldleChange} value="Full-time" title="Full-time" name="test" />
        <InputField haldleChange={haldleChange} value="Part-time" title="Part-time" name="test" />
        <InputField haldleChange={haldleChange} value="Temporary" title="Temporary" name="test" />
       
       
        
    </div>
</div>
  )
}

export default EmploymentType