import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import BurgerBtn from './BurgerBtn';

const NavLink = ({ route, children }) => {
  return <a href={route}>{children}</a>;
};

const SideBar = props => {
  const [menu, setMenu] = useState(false);
  const onMenuBtnClick = () => {
    console.log('clicked');
    return setMenu(!menu);
  };
  const onCloseMenu = () => {
    return setMenu(false);
  };

  return createPortal(
    <div className="navigation-backdrop">
      <nav className={menu ? 'sidebar sidebar-open' : 'sidebar'}>
        <div className="navlinks-wrapper">
          <NavLink route="#">
            <i className="fas fa-home" /> Home
          </NavLink>
          <NavLink route="#about">
            <i className="fas fa-id-card" /> About me
          </NavLink>
          <NavLink route="#portfolio">
            <i className="fas fa-suitcase" /> Portfolio
          </NavLink>
          {/* <NavLink route="#experience">
            <i className="fas fa-laptop-code" /> Experience
          </NavLink> */}
          <NavLink route="#tech">
            <i className="fas fa-microchip" /> Technologies
          </NavLink>
          <NavLink route="#contact">
            <i className="fas fa-phone" /> Contact Me
          </NavLink>
        </div>
      </nav>
      <BurgerBtn onClick={onMenuBtnClick} color="#888" changed={menu} size="2rem" linecap="round" />
    </div>,
    document.querySelector('#side-nav')
  );
};

export default SideBar;
