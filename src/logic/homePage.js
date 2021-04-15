import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import GameContainer from "../common/GamesContainer";
import Header from "../common/HeaderComponent";
import Links from "../common/HeaderLinks";
import ShortDesc from "../common/ShortDescriptionComponent";
import fetchGameData, { getSelectedGame } from "../redux/actions/actions";
import FullDesc from "./FullDescription";
import {linksTitles} from '../redux/tags';

function HomePage() {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.dataForGames);
  const getImages = allData.images;
  const selectedGame = allData.selectedGame;
  const [fullDesc, setFullDesc] = useState(false);
  const [links, setLinks] = useState(false);
 
  const toggleLinks = () =>{
    setLinks(!links);
  }
  const showFullDesc = (id) => {
    if(id){
    dispatch(getSelectedGame(id));
    }
    setFullDesc(!fullDesc);
  };
  const showShortDesc = (id) => {
    dispatch(getSelectedGame(id));
  };

  useEffect(() => {
    dispatch(fetchGameData());
  }, []);

  const dataRecommendedShow = () => {
    if (allData.data) {
      let recommended = allData.data.slice(0, 5);
      return (
        <GameContainer
          games={recommended}
          onClick={(id) => showShortDesc(id)}
        />
      );
    }
  };
  const dataNewShow = () => {
    if (allData.data) {
      let recommended = allData.data.slice(10, 15);
      return (
        <GameContainer
          games={recommended}
          onClick={(id) => showShortDesc(id)}
        />
      );
    }
  };

 
  return (
    <>
      <Header links={()=>toggleLinks()}/>
      {fullDesc ? (
        <FullDesc selectedGame={selectedGame} img={getImages[0]} fullDesc={()=>showFullDesc()} dataRecommendedShow={dataRecommendedShow()}/>
      ) : (
        <>
        {links&&
          <div className="links-container">
            {linksTitles.map((name) => (
              <Links linkTitle={name} />
            ))}
          </div>}
          <ShortDesc
            selectedGame={selectedGame}
            onClick={(id) => showFullDesc(id)}
          />
          {dataRecommendedShow()}
          {dataNewShow()}
        </>
      )}
    </>
  );
}

HomePage.propTypes = {};
export default HomePage;
