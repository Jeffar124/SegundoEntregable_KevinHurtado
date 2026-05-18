import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='headerContent'>
        <h1><span className='RickTitle'>Rick</span> <span className='AndTitle'>and</span> <span className='MortyTitle'>Morty</span></h1>
        <h2>Un Viaje A Través Del Multiverso</h2>
      </div>
    </header>
  )
}

export default Header