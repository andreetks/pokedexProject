import React from "react";
import PokemonList from "./PokemonList";

const SecondaryBody = ({
  pokemonList,
  setPokemonList,
  setPokemon,
  nextPage,
  prevPage,
  setNextPage,
  setPrevPage,
}) => {

  const goNext = () => {
    fetch(nextPage)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setNextPage(data?.next);
        setPrevPage(data?.previous);
      });
    document.querySelector(".base").scrollTop = 0;
  };

  const goPrev = () => {
    fetch(prevPage)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setNextPage(data?.next);
        setPrevPage(data?.previous);
      });
    document.querySelector(".base").scrollTop =
      document.querySelector(".base").scrollHeight;
  };

  return (
    <div className="secondaryBody">
      <div className="overHead"></div>
      <div className="declive"></div>
      <div className="secondaryScreen">
        <div className="base">
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {pokemonList.map((pokemonItem) => (
              <PokemonList
                name={pokemonItem.name}
                key={pokemonItem.name}
                setPokemon={setPokemon}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="blueGroup">
        <div className="squareGroup">
          <div
            className="square"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <button
              style={{
                width: "92%",
                height: "92%",
                border: "none",
                backgroundColor: "#6fc8f2",
              }}
              onClick={goPrev}
            >
              prev
            </button>
          </div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div
            className="square"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <button
              style={{
                width: "92%",
                height: "92%",
                border: "none",
                backgroundColor: "#6fc8f2",
              }}
              onClick={goNext}
            >
              next
            </button>
          </div>
        </div>
        <div className="squareGroup">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBody;
