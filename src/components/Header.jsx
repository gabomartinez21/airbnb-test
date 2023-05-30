import React from 'react';
import UserLogo from "../assets/user.png"
import SearchIcon from "../assets/magnifying-glass.png"
import Logo from "../assets/airbnb-logo.png"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
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
      <div className="user">
        <span className="slogan">Airbnb your home</span>
        <div className="languages">

        </div>
        <button>
          <img src={UserLogo} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header
