import { ThunkActionType, VideoType } from "../types";
import { SET_VIDEOS, ActionType, ADD_FAVORITE_SEARCH, SET_RESULTS_COUNT, SET_CURRENT_SEARCH, DELETE_FAVORITE_SEARCH } from "./actionTypes";

export const setVideosAction = (videos: VideoType[]): ActionType => {
  return {
    type: SET_VIDEOS,
    payload: videos
  }
};

export const addFavoriteSearch = (searhString: string): ActionType => {
  return {
    type: ADD_FAVORITE_SEARCH,
    payload: searhString
  }
};

export const setResultsCount = (count: number): ActionType => {
  return {
    type: SET_RESULTS_COUNT,
    payload: count
  }
};

export const setCurrentSearch = (search: string): ActionType => {
  return {
    type: SET_CURRENT_SEARCH,
    payload: search
  }
};

export const deleteFavoriteSearch = (search: string): ActionType => {
  return {
    type: DELETE_FAVORITE_SEARCH,
    payload: search
  }
};

export const fetchSearchingVideos = (video: string): ThunkActionType => {
  return async (dispatch, getState, api) => {
    const response = await api.get('/search', {
      params: {
        q: video
      }
    });
    dispatch(setVideosAction(response.data.items));
    dispatch(setResultsCount(response.data.pageInfo.totalResults));
    dispatch(setCurrentSearch(video));
  }
};