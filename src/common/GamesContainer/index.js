import "./style.scss";

import React from "react";
import PropTypes from "prop-types";
import GameInfo from "../GameInfo";

function GameContainer(games) {
  return (
    <div className="recommendedContainer">
      {games.games.map((item) => (
        <GameInfo
          key={item.id}
          game={item}
          onClick={(id) => games.onClick(id)}
        />
      ))}
    </div>
  );
}

GameContainer.propTypes = { games: PropTypes.array };
export default GameContainer;
