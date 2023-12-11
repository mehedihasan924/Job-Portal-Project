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
            <InputField haldleChange={haldleChange} value="london" title="London" name="test" />
            <InputField haldleChange={haldleChange} value="seattle" title="Seattle" name="test" />
            <InputField haldleChange={haldleChange} value="madrid" title="Madrid" name="test" />
            <InputField haldleChange={haldleChange} value="boston" title="Boston" name="test" />
            
        </div>
    </div>
  )
}

export default Locatins