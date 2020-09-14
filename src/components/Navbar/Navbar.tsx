import React from 'react';
import { NavLink } from 'react-router-dom';

import { routesMap } from 'routes';
import InfoSvg from 'assets/info.svg';
import VirusSvg from 'assets/virus.svg';
import StatSvg from 'assets/statistics.svg';

import './Navbar.scss';

const Navbar: React.FC = () => (
  <nav className="nav-menu">
    <NavLink
      exact
      to={routesMap.home}
      key="coronavirus"
      className="nav-menu__item"
      activeClassName="nav-menu-item-selected"
    >
      <img src={VirusSvg} alt="Virus icon" className="nav-menu__icon" />
      Global statistics
    </NavLink>
    <NavLink
      exact
      to={routesMap.statistic}
      key="stat"
      className="nav-menu__item"
      activeClassName="nav-menu-item-selected"
    >
      <img src={StatSvg} alt="Stat icon" className="nav-menu__icon" />
      Country statistics
    </NavLink>
    <NavLink
      exact
      to={routesMap.information}
      key="info"
      className="nav-menu__item"
      activeClassName="nav-menu-item-selected"
    >
      <img src={InfoSvg} alt="Information icon" className="nav-menu__icon" />
      Info
    </NavLink>
  </nav>
);

export default Navbar;
