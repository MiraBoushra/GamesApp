import * as types from "../actions/actionTypes";
import img1 from "../../assets/imgs/img1.png";
import game1 from "../../assets/imgs/game1.png";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  images:[img1,game1],
  selectedGame:{}
};

export default function activeViewReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SERVICE_ERROR: {
      return { ...state, error: action.error, isLoading: false };
    }
    case types.GET_SERVICE_SUCCESS: {
      return { ...state, data: action.payload, isLoading: false , selectedGame:action.payload[0] };
    }
    case types.GET_SERVICE_LOADING: {
      return { ...state, isLoading: true };
    }
    case types.GET_SELECTED_GAME: {
      let selected = [...state.data];
      selected = selected.find(selectedGame=>selectedGame.id===action.payload);
      return { ...state, selectedGame: selected };
    }
    default:
      return state;
  }
}
