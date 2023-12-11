import React from 'react'

const InputField = ({haldleChange, value, title, name}) => {
  return (
        <label className='sidebar-label-container'>
            <input type="radio" 
             name={name} 
             value={value}
             onChange={haldleChange} />
            <span className='checkmark'></span>{title}
        </label>
  )
}

export default InputField