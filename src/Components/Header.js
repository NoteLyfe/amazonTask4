import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
      <header id="main-header">
        <img src={logo} alt="logo" id='logo'/>
          <div className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="">Featured</a></li>
              <li><a href="#catalog">Products</a></li>
            </ul>
          </div>
      </header>
    </>
  )
}

export default Header
