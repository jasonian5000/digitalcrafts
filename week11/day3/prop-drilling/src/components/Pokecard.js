import React, { useState } from "react";

export default function Pokecard(props) {
  const [image, setImage] = useState(true);
  return (
    <div>
      <p className="pokemon-name">{props?.pokemon?.name.toUpperCase()}</p>
      <img
        onClick={() => setImage(!image)}
        src={
          image ? props?.pokemon?.sprites?.front : props?.pokemon?.sprites?.back
        }
        alt=""
      />
      <p>HP: {props?.pokemon?.hp}</p>
      <button onClick={() => props.deletePokemon(props.pokemon)}>Delete</button>
    </div>
  );
}
