import React from 'react'
import { useSelector } from 'react-redux'

import FavoriteItem from '../../Components/FavoriteItem/FavoriteItem'
import Header from '../../Components/Header/Header'
import { IAppState } from '../../types'
import './Favorite.scss';

const Favorite = () => {
  const favoriteItems = useSelector<IAppState, string[]>(state => state.favoriteSearch);
  
  return (
    <>
      <Header/>
      <section className="main-page">
        <h1 className='main-page__title main-page__title_active'>Избранное</h1>
        <ul className="favorite-list">
          {favoriteItems.map(item => <FavoriteItem key={item} text={item}/>)}
        </ul>
      </section>
    </>
  )
}

export default Favorite
