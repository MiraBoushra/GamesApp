import img1 from "../assets/imgs/img1.png";
import game1 from "../assets/imgs/game1.png";
function appendImage(id){
  if(id% 2 === 0){
    return game1;
  }
  return img1;
}

export default function gameMapper(game) {

  return {
    id: game.id,
    title: game.title,
    description: game.body,
    img: appendImage(game.id)
  };
}
