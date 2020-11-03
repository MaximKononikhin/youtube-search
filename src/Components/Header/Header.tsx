import React from 'react'
import { useHistory, Link } from 'react-router-dom';

import logo from '../../Assets/Images/sibdev-logo.svg';
import './Header.scss';

const Header = () => {

  const history = useHistory();

  return (
    <header className="main-header">
      <div className="main-header__wrapper">
        <img src={logo} alt="" width="48" height="48"/>
        <nav className="main-header__navigation">
          <Link to='/'
            className={`main-header__link ${history.location.pathname === '/'? `main-header__link_active` : ``}`}>
              Поиск
          </Link>
          <Link to='/favorite'
            className={`main-header__link ${history.location.pathname === '/favorite'? `main-header__link_active` : ``}`}>
              Избранное
          </Link>
          <a className="main-header__link" href="/#" onClick={(evt: React.MouseEvent) => {
            evt.preventDefault();
            localStorage.clear();
            history.push('/login');
          }}>Выйти</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
