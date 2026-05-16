import React from "react";
import './CardCharacter.css'

const CharacterCard = (props) => {
  const getCharacterClass = () => {
    if (props.name.includes("Rick")) return "rick";
    if (props.name.includes("Morty")) return "morty";
    if (props.name.includes("Summer")) return "summer";
    if (props.name.includes("Beth")) return "beth";
    if (props.name.includes("Jerry")) return "jerry";

    return "default";
  };
  return (

    <div className={`character-card ${getCharacterClass()}`}>
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