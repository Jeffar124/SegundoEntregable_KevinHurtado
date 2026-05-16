import React from 'react'
import './CharacterDetails.css'

const CharacterDetails = ({
    name,
    image,
    id,
    status,
    species,
    type,
    origin,
    location,
    episode,
    created
}) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString()
    }

    return (
        <div className="character-detail-card">

            <div className="character-image-container">
                <img
                    src={image}
                    alt={name}
                    className="character-image"
                />
            </div>

            <div className="character-info">

                <h1>{name}</h1>

                <div className="info-grid">

                    <div className="info-item">
                        <span className="label">ID:</span>
                        <span>{id}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Estado:</span>
                        <span>{status}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Especie:</span>
                        <span>{species}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Tipo:</span>
                        <span>{type || 'Desconocido'}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Origen:</span>
                        <span>{origin}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Ubicación:</span>
                        <span>{location}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Episodios:</span>
                        <span>{episode}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Creado:</span>
                        <span>{formatDate(created)}</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CharacterDetails