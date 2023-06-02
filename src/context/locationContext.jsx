import { useState, createContext, useEffect } from "react";
import listings from '../listings.json';

export const LocationContext = createContext();

export const LocationProvider = ({children}) => {
  
  const [locations, setLocations] = useState({})

  useEffect(() => {
    const locationsData = getLocations(listings.data)
    setLocations(locationsData)
  }, []);

  const getLocations = (data) => {
    const locationsSeparate = {};

    data.forEach(({info}) => {
      const locationItem = {
        city: info.location.city,
        address: info.location.address,
        countryTitle: info.location.country.title 
      }
      if(Object.keys(locationsSeparate).length === 0) {
        locationsSeparate[info.location.country.code] = [locationItem]

      } else {
        locationsSeparate[info.location.country.code] = locationsSeparate[info.location.country.code].concat(locationItem)
      }
    })
    return locationsSeparate;
  }

  return (
    <LocationContext.Provider value={{
      locations,
      setLocations
    }}>
      {children}
    </LocationContext.Provider>
  )
}