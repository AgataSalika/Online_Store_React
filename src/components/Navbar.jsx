import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
    <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/cart">Cart</Link>
    </nav>

    </div>

  )
}

export default Navbar