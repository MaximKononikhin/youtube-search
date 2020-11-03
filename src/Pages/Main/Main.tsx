import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BlueBtn from '../../Components/BlueBtn/BlueBtn'
import Header from '../../Components/Header/Header'
import { IAppState, ThunkDispatchType, VideoType } from '../../types';
import { addFavoriteSearch, fetchSearchingVideos } from '../../Store/actions';

import './Main.scss';
import VideoItem from '../../Components/VideoItem/VideoItem';

import heart from '../../Assets/Images/heart.svg';
import favoriteHeart from '../../Assets/Images/heartFavorite.svg';
import ResultsList from '../../Components/ResultsList/ResultsList';
import FavoriteTooltip from '../../Components/FavoriteTooltip/FavoriteTooltip';

const Main = () => {
  const dispatch = useDispatch<ThunkDispatchType>();
  const videos = useSelector<IAppState, VideoType[]>(state => state.videos);
  const [videoName, setVideoName] = useState<string>('');
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const [isTooltipActive, setTooltipActive] = useState<boolean>(false);

  return (
    <main >
      <Header/>
      <section className="main-page">
        <h1 className={`main-page__title ${videos.length > 0 && `main-page__title_active`}`}>Поиск видео</h1>
        <form className="searh-form" onSubmit={(evt) => {
          evt.preventDefault();
          videoName.length > 0 && dispatch(fetchSearchingVideos(videoName));
        }}>
          <div className="search-form__input-wrapper">
            <input
              className="search-form__input"
              type="text"
              value={videoName}
              placeholder="Что хотите посмотреть?"
              onChange={(evt) => {
                setVideoName(evt.target.value);
                setFavorite(false);
              }}
            />
            <button
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(addFavoriteSearch(videoName));
                setFavorite(true);
              }}
              onMouseEnter={() => {
                if (isFavorite) {
                  setTimeout(() => {
                    setTooltipActive(true)
                  }, 1000)
                }
              }}
              onMouseLeave={() => {
                isFavorite && setTooltipActive(false);
              }}
            >
              <img src={isFavorite? favoriteHeart : heart} width="24" height="24" alt=""/>
            </button>
            {isTooltipActive && <FavoriteTooltip/>}
          </div>
          <BlueBtn text={'Найти'} disabled={false}/>
        </form>
        {videos.length > 0 &&
          <ResultsList>
            {videos.map((video) => <VideoItem key={video.etag} video={video}/>)}
          </ResultsList>
        }
      </section>
    </main>
  )
}

export default Main;
