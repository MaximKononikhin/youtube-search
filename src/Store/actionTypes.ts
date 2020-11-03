import { VideoType } from "../types";

export const SET_VIDEOS = 'set-videos';
export const ADD_FAVORITE_SEARCH = 'add-favorite-search';
export const SET_RESULTS_COUNT = 'set-results-count';
export const SET_CURRENT_SEARCH = 'set-current-search';
export const DELETE_FAVORITE_SEARCH = 'delete-favorite-search';

type SetVideos = {
  type: typeof SET_VIDEOS,
  payload: VideoType[]
};

type AddFavoriteSearch = {
  type: typeof ADD_FAVORITE_SEARCH,
  payload: string
};

type SetResultsCount = {
  type: typeof SET_RESULTS_COUNT,
  payload: number
};

type SetCurrentSearch = {
  type: typeof SET_CURRENT_SEARCH,
  payload: string
};

type DeleteFavoriteSearch = {
  type: typeof DELETE_FAVORITE_SEARCH,
  payload: string
}

export type ActionType =  SetVideos | AddFavoriteSearch | SetResultsCount | SetCurrentSearch | DeleteFavoriteSearch;