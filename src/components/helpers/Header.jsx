import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Productos</Link>
        <Link to={'#'} id='disabled-button'>
          Disabled
        </Link>
      </nav>
    </header>
  )
}

export default Header
