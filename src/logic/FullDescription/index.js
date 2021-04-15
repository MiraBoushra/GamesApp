import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function FullDesc(selectedGame) {
  const title = selectedGame.selectedGame.title;
  const description = selectedGame.selectedGame.description;
  const img = selectedGame.selectedGame.img;
  const fullDesc = selectedGame.fullDesc;
  return (
    <div>
      <button onClick={fullDesc}>
        back
      </button>
      <div className="fullDesc-container">
        <img src={img} alt="game" />
        <div className="fullDesc-container__body">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
      {selectedGame.dataRecommendedShow}
    </div>
  );
}

FullDesc.propTypes = { selectedGame: PropTypes.any };
export default FullDesc;
