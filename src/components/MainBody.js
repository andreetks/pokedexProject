import React from "react";

const MainBody = ({ pokemon }) => {
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
          <input type="text" value={pokemon.name} />
          <input type="submit" />
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
