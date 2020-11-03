import { IAppState } from "../types";
import { ActionType, ADD_FAVORITE_SEARCH, DELETE_FAVORITE_SEARCH, SET_CURRENT_SEARCH, SET_RESULTS_COUNT, SET_VIDEOS } from "./actionTypes";

const favoriteSearches = localStorage.getItem('favoriteSearches');

const initialState: IAppState = {
  videos: [],
  favoriteSearch: JSON.parse(typeof favoriteSearches === 'string'? favoriteSearches : '[]'),
  resultsCount: 0,
  currentSearch: ''
};

export const reducer = (state = initialState, action: ActionType): IAppState => {
  switch (action.type) {
    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      }
    
    case ADD_FAVORITE_SEARCH:
      localStorage.setItem('favoriteSearches', JSON.stringify([...state.favoriteSearch, action.payload]))
      return {
        ...state,
        favoriteSearch: [...state.favoriteSearch, action.payload]
      }

    case SET_RESULTS_COUNT:
      return {
        ...state,
        resultsCount: action.payload
      }

    case SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.payload
      }

    case DELETE_FAVORITE_SEARCH:
      localStorage.setItem('favoriteSearches', JSON.stringify(state.favoriteSearch.filter(search => search !== action.payload)))
      return {
        ...state,
        favoriteSearch: state.favoriteSearch.filter(search => search !== action.payload)
      }

    default: return state;
  }
}