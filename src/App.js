import "./App.css";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <div class="container">
      <div class="mainBody">
        <div class="blueBall"></div>
        <div class="red miniBall"></div>
        <div class="yellow miniBall"></div>
        <div class="green miniBall"></div>
        <div class="mainScreen">
          <div class="imageContainer">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="pika"
            />
          </div>
          <div class="dotLeft"></div>
          <div class="dotRight"></div>
          <div class="decliveBottom"></div>
        </div>
        <div class="searchTab">
          <form action="">
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
        <div class="crossY"></div>
        <div class="crossX"></div>
        <div class="greenScreen"></div>
      </div>
      <div class="secondaryBody">
        <div class="overHead"></div>
        <div class="declive"></div>
        <div class="secondaryScreen">
          <div class="base">
            <ul>
              <PokemonList />
              <PokemonList />
              <PokemonList />
              <PokemonList />
              <PokemonList />
              <PokemonList />
              <PokemonList />
              <PokemonList />
            </ul>
            <div class="pokemonSelector">
              <img
                src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"
                alt="pokeball"
              />
            </div>
          </div>
        </div>
        <div class="blueGroup">
          <div class="squareGroup">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </div>
          <div class="squareGroup">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
