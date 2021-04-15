import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";

function ShortDesc(GameObj) {

  const game = GameObj.selectedGame;
  const showFullDesc =GameObj.onClick;
  return (
    <>
      {game && (
        <div className="shortDesc-container" onClick={()=>showFullDesc(game.id)} >
          <img src={game.img} alt='game'/>
          <span className="shortDesc-container__info">
            <p className="shortDesc-container__info__title">{game.title}</p>
          </span>
        </div>
      )}
    </>
  );
}

ShortDesc.propTypes = { GameObj: PropTypes.object,showFullDesc:PropTypes.func };
export default ShortDesc;
