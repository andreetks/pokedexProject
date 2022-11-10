import React from "react";

const MainBody = ({ pokemon, setPokemon }) => {

  const manageChange = (e) => {
    console.log(e.target.value)
    setPokemon({...pokemon, name: e.target.value})
  }

  const changePokemon = (e) =>{
    e.preventDefault()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon({
          name: `${data.name}`,
          image: `${data.sprites.other["official-artwork"]["front_default"]}`,
        });
      });
  }

  return (
    <div className="mainBody">
      <div className="blueBall"></div>
      <div className="red miniBall"></div>
      <div className="yellow miniBall"></div>
      <div className="green miniBall"></div>
      <div className="mainScreen">
        <div className="imageContainer">
          <img src={pokemon.image} alt="pika" />
        </div>
        <div className="dotLeft"></div>
        <div className="dotRight"></div>
        <div className="decliveBottom"></div>
      </div>
      <div className="searchTab">
        <form action="">
          <input type="text" value={pokemon.name} onChange={manageChange}/>
          <input type="submit" onClick={changePokemon} />
        </form>
      </div>
      <div className="indicators">
        <div className="indicatorsFlex">
          <div className="greenScreen"></div>
          <div className="arrows">
            <div className="crossY">
              <div className="crossX"></div>
            </div>
          </div>
        </div>
        {/* <div className="crossY"></div>
        <div className="crossX"></div>
        <div className="greenScreen"></div> */}
      </div>
    </div>
  );
};

export default MainBody;
