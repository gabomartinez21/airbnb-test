import React, { useContext, useState } from 'react'
import { LocationContext } from '../../context/locationContext'

const City = ({setCity, city, setBarClass, barClass}) => {

  const [showModal, setShowModal] = useState(false)
  const [searchLocations, setSearchLocations] = useState([])
  const [boxClasses, setBoxClasses] = useState(['input-box'])
  const {locations}  = useContext(LocationContext)

  const handleSearchInput = (e) => {
    const searchValue = e.target.value;
    setCity(searchValue)
    const values = Object.values(locations)
    const findLocations = values[0].filter((searchItem, index, arr) => searchItem.city.includes(searchValue) &&
        arr.findIndex(t => t.city === searchItem.city && t.countryTitle === searchItem.countryTitle) === index
    );
    setSearchLocations(findLocations)
  }

  const handlePutCitySearch = (e, item) => {
    setCity(`${item.city}, ${item.countryTitle}`)
    setShowModal(false)
  }

  const handleModal = () => {
    setBoxClasses([...boxClasses, 'selected'])
    setBarClass([...barClass, 'focus'])
    setShowModal(true)
  }

  return (
    <div className="menu-box">
      <div className={boxClasses.join(' ')}>
        <div>
          <label htmlFor="">Where</label>
          <input 
            type="text"
            value={city}
            placeholder='Search destination'
            onClick={handleModal}
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
            {searchLocations.map(item => (
              <li>
                <span className='icon map'></span>
                <a href="#" onClick={(e) => handlePutCitySearch(e, item)}>{item.city}, {item.countryTitle}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default City
