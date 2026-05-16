import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home'>


      <section className='hero'>

        <div className='heroText'>

          <span className='tag'>
            DIMENSION C-137
          </span>

          <h1>
            Explore el Multiverso de
            <span> Rick and Morty</span>
          </h1>

          <p>
            Descubre personajes, especies,
            dimensiones y aventuras usando
            la API oficial de Rick and Morty.
          </p>

          <div className='heroButtons'>

            <Link to='/characters' className='primaryBtn'>
              Ver Personajes
            </Link>

            <a
              href='https://rickandmortyapi.com/'
              target='_blank'
              rel='noreferrer'
              className='secondaryBtn'
            >
              API Oficial
            </a>

          </div>

        </div>

        <div className='heroCard'>

          <div className='cardGlow'></div>

          <img
            src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
            alt='Rick Sanchez'
          />

          <div className='cardInfo'>
            <h2>Rick Sanchez</h2>

            <p>
              Científico, genio, alcohólico y
              el ser más peligroso del multiverso.
            </p>

            <div className='status'>
              <span></span>
              Alive
            </div>
          </div>

        </div>

      </section>

    </main>
  )
}

export default Home