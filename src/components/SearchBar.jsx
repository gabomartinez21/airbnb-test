import React, { useState } from 'react'
import City from './Search/City'
import Calendar from './Search/Calendar'

const SearchBar = () => {

  const [barClass, setBarClass] = useState(['SearchBar'])
  const [city, setCity] = useState('');



  return (
    <div className={barClass.join(' ')}>
      <City setCity={setCity} city={city} setBarClass={setBarClass} barClass={barClass}/>
      <Calendar setBarClass={setBarClass} barClass={barClass}/>
    </div>
  )
}

export default SearchBar
