import serviceMapper from "../../mapper/GameMapper";

import * as types from "./actionTypes";
import axios from "axios";

export default function fetchGameData() {
  return async (dispatch) => {
    dispatch({
      type: types.GET_SERVICE_LOADING,
    });

    axios.get(`http://jsonplaceholder.typicode.com/posts`).then((res) => {
      const data = res.data;

      dispatch({
        type: types.GET_SERVICE_SUCCESS,
        payload: data.map((game) => serviceMapper(game)),
      });
    });
  };
}
export function getSelectedGame(id) {
  return async (dispatch) => {
    dispatch({
      type: types.GET_SELECTED_GAME,
      payload: id,
    });
  }
  
}
