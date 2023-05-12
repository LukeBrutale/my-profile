import React from 'react';
import s from './Header.module.css';
// import svg from '../../icons/logo-luke.svg';
import Logo from '../../icons/icons8-logo-80.png';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
