import React, { useState, Children, useEffect } from 'react'
import listings from '../listings.json'
import { Card } from '../components/Card'

const Home = () => {

  const [list, setList] = useState([])
  const [categories, setCategories] = useState([])

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLat(latitude)
      setLong(longitude)
    });
  }, [])

  useEffect(() => {
    setList(listings.data)
    setCategories(listings.categories)
  }, [])

  
  return (
    <div className="Home">
      <div className="row">
        {Children.toArray(list.slice(0,12).map(data => (
          <div className="col-6 col-md-4 col-lg-2">
            <Card 
              info={data.info}
              lat={lat}
              long={long}
            />
          </div>
        )))}
      </div>
    </div>
  )
}

export default Home
