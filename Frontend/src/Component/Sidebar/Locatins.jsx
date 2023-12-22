import React from 'react'
import InputField from './InputField'

const Locatins = ({haldleChange}) => {
  return (
    <div >
        <h4 className='text-lg font-medium mb-2'> Locatins</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' id='text' value="" onChange={haldleChange}/>
                <span className='checkmark'></span> All
            </label>
            <InputField haldleChange={haldleChange} value="Dhaka" title="Dhaka" name="test" />
            <InputField haldleChange={haldleChange} value="Sylhet" title="Sylhet" name="test" />
            <InputField haldleChange={haldleChange} value="Chattogram" title="Chattogram" name="test" />
            <InputField haldleChange={haldleChange} value="Barishal" title="Barishal" name="test" />
            
        </div>
    </div>
  )
}

export default Locatins