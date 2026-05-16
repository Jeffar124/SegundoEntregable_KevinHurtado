import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Details.css'
import CharacterDetails from '../../Components/CharacterDetails/CharacterDetails'

const Details = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [character, setCharacter] = useState(null)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [])

    return (
        <div className='detailsPage'>

            <div className='detailsContainer'>

                <h1 className='detailsTitle'>
                    Detalles de <span>{character?.name}</span>
                </h1>

                {character ? (
                    <CharacterDetails
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        id={character.id}
                        status={character.status}
                        species={character.species}
                        type={character.type}
                        origin={character.origin.name}
                        location={character.location.name}
                        episode={character.episode.length}
                        created={character.created}
                    />
                ) : (
                    <p className='loadingText'>
                        Cargando personaje...
                    </p>
                )}

                <button
                    className='backButton'
                    onClick={() => navigate(-1)}
                >
                    ← Ir atrás
                </button>

            </div>

        </div>
    )
}

export default Details