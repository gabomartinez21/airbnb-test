import React, { useContext, useState } from 'react'
import { LocationContext } from '../../context/locationContext'

const City = ({setCity, city}) => {

  const [showModal, setShowModal] = useState(false)
  const [locations] = useContext(LocationContext)

  return (
    <div className="menu-box">
      <div className="input-box">
        <div>
          <label htmlFor="">Where</label>
          <input 
            type="text"
            value={city}
            placeholder='Search destination'
            onClick={() => setShowModal(true)}
            onChange={e => setCity(e.target.value)}
          />   
        </div>
        {showModal && city !== '' && (
          <button onClick={() => setShowModal(false)}>X</button>
        )}
      </div>
      {showModal && (
        <div className="modal">
          <ul>
            <li>
              <span className='icon map'></span>
              <a href="" onClick={null}>Hardwick, United States</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default City
