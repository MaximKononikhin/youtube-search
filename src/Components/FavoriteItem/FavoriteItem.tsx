import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteFavoriteSearch, fetchSearchingVideos } from '../../Store/actions';
import { ThunkDispatchType } from '../../types';
import './FavoriteItem.scss';

type IProps = {
  text: string
}

const FavoriteItem = ({text}: IProps) => {
  const dispatch = useDispatch<ThunkDispatchType>();
  const history = useHistory();

  return (
    <li className="favorite-list__item" >
      <p onClick={() => {
         dispatch(fetchSearchingVideos(text));
         history.push('/');
      }}>{text}</p>
      <span className="favorite-list__delete-btn-wrapper" onClick={() => dispatch(deleteFavoriteSearch(text))}>
        <span className="favorite-list__delete-btn"></span>
      </span>
    </li>
  )
}

export default FavoriteItem
