import React from "react";

const NavLink = props => {
  let activeAttr =
    window.location.pathname === props.route ? "active" : "inactive";
  return (
    <a className={activeAttr} href={props.route}>
      {props.children}
    </a>
  );
};

const SideBar = props => {
  return (
    <div className="navigation-backdrop">
      <nav className="sidePanel ">
        <NavLink route="/">
          <i className="fas fa-home" /> Home
        </NavLink>
        <NavLink route="#about">
          <i className="fas fa-suitcase" /> About me
        </NavLink>
        <NavLink route="#portfolio">
          <i className="fas fa-suitcase" /> Portfolio
        </NavLink>
        <NavLink route="#experience">
          <i className="fas fa-suitcase" /> Experience
        </NavLink>
        <NavLink route="#tech">
          <i className="fas fa-suitcase" /> Technologies
        </NavLink>
        <NavLink route="#contact">
          <i className="fas fa-phone" /> Contact Me
        </NavLink>
      </nav>
      <div className="burgerBtn">
        <div className="btnBar1" />
        <div className="btnBar2" />
        <div className="btnBar3" />
      </div>
    </div>
  );
};

export default SideBar;
