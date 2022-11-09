import React from "react";

const PokemonList = ({ name, setPokemon }) => {
  
  const changetoSelect = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon({
          name: `${data.name}`,
          image: `${data.sprites.other["official-artwork"]["front_default"]}`,
        });
      });

  };

  return (
    <>
      <li
        style={{
          padding: 0,
          fontSize: "1.2rem",
          fontWeight: "bold",
          position: "relative",
        }}
      >
        <label className="pokemonItem">
          <input type="radio" name="radio" onClick={changetoSelect} />
          <span className="checkmark"></span>
          <span className="checkContainer"></span>
          {name.toUpperCase()}
        </label>
      </li>

    </>
  );
};

export default PokemonList;
