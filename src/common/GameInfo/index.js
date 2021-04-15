import "./style.scss";

import React from "react";
import PropTypes from "prop-types";

function GameInfo(game) {
  return (
    <div onClick={()=>game.onClick(game.game.id)} className="gameInfo-container">
        <img src={game.game.img} alt='game'/>
        <p>
            {game.game.title}
        </p>
    </div>
  );
}

GameInfo.propTypes = {game:PropTypes.object};
export default GameInfo;
