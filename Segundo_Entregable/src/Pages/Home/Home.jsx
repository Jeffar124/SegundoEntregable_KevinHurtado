import React from 'react'
import { useState, useEffect } from "react";
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const ids = [];
    for (let i = 0; i < 6; i++) {
      const randomId = Math.floor(Math.random() * 826) + 1;
      ids.push(randomId);
    }

    fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div className="home-grid">
      {characters.map((character) => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          <CardCharacter
            name={character.name}
            gender={character.gender}
            species={character.species}
            image={character.image}
            status={character.status}
          />
        </Link>
      ))}
    </div>
  )
}

export default Home