import React, { useState } from "react";

const NavLink = ({ route, children }) => {
  return <a href={route}>{children}</a>;
};

const BurgerBtn = props => {
  return (
    <div className="burgerBtn" onClick={props.onClick}>
      <div className="btnBar1" />
      <div className="btnBar2" />
      <div className="btnBar3" />
    </div>
  );
};

const SideBar = props => {
  const [menu, setMenu] = useState("");
  const onMenuBtnClick = () => {
    console.log("clicked");
    return setMenu(!menu);
  };

  return (
    <div className="navigation-backdrop">
      <nav className={menu ? "sidebar sidebar-open" : "sidebar"}>
        <NavLink route="/">
          <i className="fas fa-home" /> Home
        </NavLink>
        <NavLink route="#about">
          <i className="fas fa-id-card" /> About me
        </NavLink>
        <NavLink route="#portfolio">
          <i className="fas fa-suitcase" /> Portfolio
        </NavLink>
        <NavLink route="#experience">
          <i className="fas fa-laptop-code" /> Experience
        </NavLink>
        <NavLink route="#tech">
          <i className="fas fa-microchip" /> Technologies
        </NavLink>
        <NavLink route="#contact">
          <i className="fas fa-phone" /> Contact Me
        </NavLink>
      </nav>
      <BurgerBtn onClick={onMenuBtnClick} />
    </div>
  );
};

export default SideBar;
