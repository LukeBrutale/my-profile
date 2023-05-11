import React from "react";
import svg from "../../icons/logo-luke.svg"


const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
          src={svg} 
          alt="logo"
        />
      </header>
  )
}

export default Header;