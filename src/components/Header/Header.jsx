import React from 'react';
import s from './Header.module.css';
// import svg from '../../icons/logo-luke.svg';
import Logo from '../../icons/icons8-logo-80.png';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
        <NavLink to={'/login'}>Login</NavLink >
      </div>
      <img className={s.logo} src={Logo} alt="logo" />

    </header>
  );
};

export default Header;
