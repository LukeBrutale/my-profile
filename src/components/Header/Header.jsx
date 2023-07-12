import React from 'react';
import s from './Header.module.css';
import Logo from '../../icons/icons8-logo-80.png';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'} className={s.login}>Login</NavLink >}
      </div>
      <img className={s.logo} src={Logo} alt="logo" />

    </header>
  );
};

export default Header;
