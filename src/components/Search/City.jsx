import React, { useContext, useState } from 'react'
import { LocationContext } from '../../context/locationContext'

const City = ({setCity, city}) => {

  const [showModal, setShowModal] = useState(false)
  const {locations}  = useContext(LocationContext)

  const handleSearchInput = (e) => {
    const searchValue = e.target.value;
    setCity(searchValue)
    const findLocations = searchValue.find(searchItem => searchItem.city.includes(searchValue))

    console.log(findLocations)

  }

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
            onChange={handleSearchInput}
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
