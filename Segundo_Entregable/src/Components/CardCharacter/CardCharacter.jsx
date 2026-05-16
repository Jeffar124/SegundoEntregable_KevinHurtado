import React from "react";
import './CardCharacter.css'

const CharacterCard = (props) => {
  return (
    <div className="character-card">
      <img
        src={props.image}
        alt={props.name}
        className="character-image"
      />

      <div className="character-info">
        <h2>{props.name}</h2>

        <p>
          <strong>Especie:</strong> {props.species}
        </p>

        <p>
          <strong>Estado:</strong> {props.status}
        </p>

        <p>
          <strong>Género:</strong> {props.gender}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;