import React from 'react';

import { VideoType } from '../../types';
import './VideoItem.scss';

interface IProps {
  video: VideoType
}

const VideoItem = (props: IProps) => {
  const {video} = props;
  return (
    <li className="video-item">
      <iframe allowFullScreen src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.channelTitle}/>
      <div className="video-item__wrapper">
        <h4 className="video-item__title">{video.snippet.title}</h4>
        <p className="video-item__description">{video.snippet.description}</p>
      </div>
    </li>
  )
}

export default VideoItem
