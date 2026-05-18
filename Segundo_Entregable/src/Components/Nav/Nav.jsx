import React from 'react'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

  const location = useLocation()

  return (
    <nav className='nav'>

      <ul className='navList'>

        <Link
          to='/'
          className={
            location.pathname === '/'
              ? 'navLink active'
              : 'navLink'
          }
        >
          <li>Home</li>
        </Link>

        <Link
          to='/characters'
          className={
            location.pathname === '/characters'
              ? 'navLink active'
              : 'navLink'
          }
        >
          <li>Personajes</li>
        </Link>

      </ul>
    </nav>
  )
}

export default Nav