import React from 'react'

const City = ({setCity}) => {
  return (
    <div className="input-box">
      <label htmlFor="">Where</label>
      <input 
        type="text" 
        placeholder='Search destination'
      />      
    </div>
  )
}

export default City
