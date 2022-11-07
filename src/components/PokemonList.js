import React from "react";

const PokemonList = () => {
  return (
    <>
      <li>
        <button className="pokemonSelect" style={{
          width: "100%",
          height: "100%",
          padding: "14px 0",
          // border: 0
        }}>
          <img
            style={{
              display: "",
              width: "40px",
              position: "absolute",
              left: "11px",
              top: "3px",
            }}
            src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"
            alt="pokeball"
            className="unselected"
          />
          002 POKEMON
        </button>
      </li>
    </>
  );
};

export default PokemonList;
