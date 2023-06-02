import React, { useEffect, useRef, useState } from 'react'

const Calendar = ({setBarClass, barClass}) => {
  const [showModal, setShowModal] = useState(false)
  const [boxClasses, setBoxClasses] = useState(['input-box'])
  const ref = useRef(null)

  useEffect(() => {
    document.addEventListener('click', (e) => {
      
    })
  }, [])

  const handleModal = () => {
    setBarClass([...barClass,'focus'])
    setShowModal(true)
    setBoxClasses([...boxClasses, 'selected'])
  }
  return (
    <div 
      ref={ref}
      className="menu-box calendar">
      <div className={boxClasses.join(' ')}>
        <div>
          <label htmlFor="">Check in</label>
          <input 
            type="date"
            placeholder='Search destination'
            onClick={handleModal}
          />   
        </div>
      </div>
      <div className="input-box">
        <div>
          <label htmlFor="">Check out</label>
          <input 
            type="date"
            placeholder='Search destination'
            onClick={() => setShowModal(true)}
          />   
        </div>
      </div>
      {showModal && (
        <div className="modal">
          
        </div>
      )}
    </div>
  )
}

export default Calendar
