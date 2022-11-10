import React, { useState, useEffect } from "react";
import "./App.css";
import MainBody from "./components/MainBody";
import SecondaryBody from "./components/SecondaryBody";

const App = () => {
  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  });
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const getPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setPrevPage(data?.previous);
        setNextPage(data?.next);
      });
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="container">
      <MainBody pokemon={pokemon} setPokemon={setPokemon} />
      <SecondaryBody
        pokemonList={pokemonList}
        setPokemon={setPokemon}
        setPokemonList={setPokemonList}
        nextPage={nextPage}
        prevPage={prevPage}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
      />
    </div>
  );
};

export default App;
