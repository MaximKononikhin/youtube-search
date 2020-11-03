import { AxiosInstance } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ActionType } from "./Store/actionTypes";

export type VideoType = {
  etag: string,
  id: {
    kind: string,
    videoId: string,
  }
  kind: string,
  snippet: {
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishTime: string,
    publishedAt: string,
    thumbnails: {
      default: {
        url: string,
        width: number,
        height: number
      },
      high: {
        url: string,
        width: number,
        height: number
      },
      medium: {
        url: string,
        width: number,
        height: number
      }
    }
    title: string
  }
}

export type IAppState = {
  videos: VideoType[],
  favoriteSearch: string[],
  resultsCount: number,
  currentSearch: string
}

export type ThunkActionType = ThunkAction<Promise<void>, IAppState, AxiosInstance, ActionType>;
export type ThunkDispatchType = ThunkDispatch<IAppState, AxiosInstance, ActionType>;