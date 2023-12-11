import React from 'react'
import InputField from './InputField'

const WorkExprience = ({haldleChange}) => {
  return (
    <div >
        <h4 className='text-lg font-medium mb-2'> Work Exprience </h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' id='text' value="" onChange={haldleChange}/>
                <span className='checkmark'></span>Any experience
            </label>
            <InputField haldleChange={haldleChange} value="Internship" title="Internship" name="test" />
            <InputField haldleChange={haldleChange} value="Work remotely" title="Work remotely" name="test" />                    
        </div>
    </div>
  )
}

export default WorkExprience