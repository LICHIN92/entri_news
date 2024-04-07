import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="navbar">
  <img className="logo" src={logo} alt="Entri news logo" />
  <nav className="links ">
    <ul>
      <li className="link">
        <Link to="/">Home</Link>
      </li>
      <li className="link">
        <Link to="#">New</Link>
      </li>
      <li className="link">
        <Link to="#">Popular</Link>
      </li>
      <li className="link">
        <Link to="#">Trending</Link>
      </li>
      <li className="link">
        <Link to="/trending">Categories</Link>
      </li>
    </ul>
  </nav>
</header>

    </div>
  )
}

export default Header