import React from 'react'
import './CharacterDetails.css'

const CharacterDetails = (props) => {

    const getCharacterClass = () => {
        if (props.name.includes("Rick")) return "rick";
        if (props.name.includes("Morty")) return "morty";
        if (props.name.includes("Summer")) return "summer";
        if (props.name.includes("Beth")) return "beth";
        if (props.name.includes("Jerry")) return "jerry";

        return "default";
    };
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString()
    }

    return (
        <div className={`character-detail-card ${getCharacterClass()}`}>

            <div className="character-image-container">
                <img
                    src={props.image}
                    alt={props.name}
                    className="character-image-detail"
                />
            </div>

            <div className="character-info">


                <div className="info-grid">

                    <div className="info-item">
                        <span className="label">ID:</span>
                        <span className="attributes">{props.id}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Estado:</span>
                        <span className="attributes">{props.status}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Especie:</span>
                        <span className="attributes">{props.species}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Tipo:</span>
                        <span className="attributes">{props.type || 'Desconocido'}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Origen:</span>
                        <span className="attributes">{props.origin}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Ubicación:</span>
                        <span className="attributes">{props.location}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Episodios:</span>
                        <span className="attributes">{props.episode}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Creado:</span>
                        <span className="attributes">{formatDate(props.created)}</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CharacterDetails