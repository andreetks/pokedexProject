import React from 'react'

const MainBody = ({ pokemon }) => {
  return (
    <div class="mainBody">
            <div class="blueBall"></div>
            <div class="red miniBall"></div>
            <div class="yellow miniBall"></div>
            <div class="green miniBall"></div>
            <div class="mainScreen">
                <div class="imageContainer">
                    <img src={pokemon.image} alt="pika" />
                </div>
                <div class="dotLeft"></div>
                <div class="dotRight"></div>
                <div class="decliveBottom"></div>
            </div>
            <div class="searchTab">
                <form action="">
                    <input type="text"  value={pokemon.name}/>
                    <input type="submit" />
                </form>
            </div>
            <div class="crossY"></div>
            <div class="crossX"></div>
            <div class="greenScreen"></div>
        </div>
  )
}

export default MainBody