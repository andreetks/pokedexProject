import React, { useState } from "react";

const PokemonList = ({ name, setPokemon }) => {
  const [styleImg, setStyleImg] = useState({
    width: "40px",
    position: "absolute",
    left: "11px",
    top: "3px",
    filter: "grayscale(1) blur(1px)",
  });
  const [styleButton, setStyleButton] = useState({
    width: "100%",
    height: "100%",
    padding: "14px 0",
  });
  const [isSelected, setIsSelected] = useState(false)

  const changeToSet = () => {
    if (!isSelected){
      setStyleImg({
      width: "40px",
      position: "absolute",
      left: "11px",
      top: "3px",
    });
    }
    
  };

  const changeToUnset = () => {
    if (!isSelected){
      setStyleImg({
      width: "40px",
      position: "absolute",
      left: "11px",
      top: "3px",
      filter: "grayscale(1) blur(1px)",
    });
    setStyleButton({
      width: "100%",
      height: "100%",
      padding: "14px 0"
    });
    }
    
  };

  const changetoSelect = () => {

    setIsSelected(!isSelected)
    const buttons = document.querySelectorAll(".pokemonSelect");
    buttons.forEach((button) => {
      button.style.border = ""
    });
    // console.log("finish");
    const images = document.querySelectorAll(".pokemonSelect img");
    images.forEach((image) => {
      image.style.filter = "grayscale(1) blur(1px)";
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPokemon({
        name: `${data.name}`,
        image: `${data.sprites.other["official-artwork"]["front_default"]}`
      })
    })

    setStyleImg({
      width: "40px",
      position: "absolute",
      left: "11px",
      top: "3px",
      filter: "none"
    });

    setStyleButton({
      width: "100%",
      height: "100%",
      padding: "14px 0",
      border: "3px solid black"
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
        <button
          style={styleButton}
          className="pokemonSelect"
          onMouseEnter={changeToSet}
          onMouseLeave={changeToUnset}
          onClick={changetoSelect}
        >
          <img
            style={styleImg}
            src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"
            alt="pokeball"
          />

          {name.toUpperCase()}
        </button>
      </li>
    </>
  );
};

export default PokemonList;
