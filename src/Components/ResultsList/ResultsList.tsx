import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../types';

import grid from '../../Assets/Images/grid.svg';
import gridActive from '../../Assets/Images/gridActive.svg';
import list from '../../Assets/Images/list.svg';
import listActive from '../../Assets/Images/listActive.svg';

import './ResultsList.scss';

type IProps = {
  children: React.ReactNode
}

const ResultsList = ({children}: IProps) => {
  const currentSearch = useSelector<IAppState, string>(state => state.currentSearch);
  const resultsCount = useSelector<IAppState, number>(state => state.resultsCount);

  const [isList, switchView] = useState(false);

  return (
    <div className="search-results">
      <header className="search-results__header">
        <h3>Видео по запросу <span>«{currentSearch}»</span></h3>
        <p>{resultsCount}</p>
        <ul className="search-results__view-switcher">
          <button onClick={() => switchView(true)}>
            <img src={isList? listActive : list} width="24" height="24" alt=""/>
          </button>
          <button onClick={() => switchView(false)}>
            <img src={isList? grid : gridActive}  width="24" height="24" alt=""/>
          </button>
        </ul>
      </header>
      <ul className={`search-results__list ${isList && `search-results__list_active`}`}>
        {children}
      </ul>
    </div>
  )
}

export default ResultsList;
