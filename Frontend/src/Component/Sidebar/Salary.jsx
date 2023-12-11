import React from 'react'
import Button from './Button';
import InputField from './InputField';


const Salary = ({haldleChange, haldleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary </h4>
      <div>
         <Button  onClickHandler={haldleClick} value="Hourly" title="Hourly"/>
         <Button  onClickHandler={haldleClick} value="Monthly" title="Monthly"/>
         <Button  onClickHandler={haldleClick} value="Yearly" title="Yearly"/>
      </div>
      <div>
              <label className='sidebar-label-container'>
                <input type="radio" name='test2' id='text' value="" onChange={haldleChange}/>
                <span className='checkmark'></span> All
            </label>
            <InputField haldleChange={haldleChange} value={30} title="< 30000k" name="test2" />
            <InputField haldleChange={haldleChange} value={50} title="< 50000k" name="test2" />
            <InputField haldleChange={haldleChange} value={80} title="< 80000k" name="test2" />
            <InputField haldleChange={haldleChange} value={100} title="< 100000k" name="test2" />
      </div>
    </div>
  )
}

export default Salary;