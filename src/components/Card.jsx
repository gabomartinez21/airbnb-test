import React, { useState, Children, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { calculateDistance } from '../helpers';

export const Card = ({info, lat, long}) => {
  const [distance, setDistance] = useState(0)
  useEffect(() => {
    const proximity = calculateDistance(lat, long, info.location)
    setDistance(proximity)
  }, [])
  return (
    <div className="card">
      <div className="like">
        <span className="icon heart"></span>
      </div>
      <Carousel 
        dynamicHeight={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        {Children.toArray(info.images.data.slice(0, 6).map((image, i) => (
          <div
            className='img-carousel'
            style={{backgroundImage: 'url(' + image.url + ')'}}
          >
          </div>
        )))}
      </Carousel>
      <div className="card-body">
        <div className="title">
          <h3>{info.location.city}, {info.location.country.title}</h3>
          <span className="rating">
            <span className="icon star"></span>
            {info.ratings.value}
          </span>
        </div>
        <p>
          {distance} miles away
        </p>

        <div className="price">
          <span>${info.price} </span>
          night
        </div>
      </div>
    </div>
  )
}
