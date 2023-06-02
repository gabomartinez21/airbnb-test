import React, {useState, useEffect} from 'react';
import SearchIcon from "../assets/magnifying-glass.png"
import Logo from "../assets/airbnb-logo.png"
import SearchBar from './SearchBar';

const Header = () => {

  const [headerOverlay, setHeaderOverlay] = useState(['search-menu'])

  const handleSearch = () => {
    setHeaderOverlay([...headerOverlay, 'search-open'])
  }

  return (
    <header className={headerOverlay.join(' ')}>
      <div className="header-block">
        <div className="nav">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <button type="button" onClick={handleSearch}>
            <ul className="search-block">
              <li>
                <a href="#">Anywhere</a>
              </li>
              <li>
                <a href="#">Any week</a>
              </li>
              <li>
                <a href="#">Add guests</a>
                <button>
                  <img src={SearchIcon} alt="" />
                </button>
              </li>
            </ul>
          </button>
          <div className="user">
            <span className="slogan">Airbnb your home</span>
            <div className="languages">
              <span className="icon world"></span>
            </div>
            <button>
              <span className="icon menu-burguer"></span>
              <span className="icon user-logo"></span>
            </button>
          </div>
        </div>
        {headerOverlay.includes('search-open') && (
          <SearchBar />
        )}
      </div>
    </header>
  )
}

export default Header
