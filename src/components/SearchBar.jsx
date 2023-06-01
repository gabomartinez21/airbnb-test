import React, { useState } from 'react'
import City from './Search/City'

const SearchBar = () => {

  const [city, setCity] = useState('')
  return (
    <div className='SearchBar'>
      <City setCity={setCity} />
    </div>
  )
}

export default SearchBar