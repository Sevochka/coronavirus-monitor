import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routesMap } from 'routes';

import VirusSvg from '../../assets/virus.svg';

import StatSvg from '../../assets/statistics.svg';
import InfoSvg from '../../assets/info.svg';

import './Navbar.scss';

const Navbar:React.FC = () => {
  const [current, setCurrent] = useState<string>('mail');

  const handleClick = (e: any ) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="nav-menu" theme="dark">
      <Menu.Item key="coronavirus" className="nav-menu__item">
        <Link to={routesMap.home}>
          <img alt="Virus icon" src={VirusSvg} className="nav-menu__icon" />

          Коронавирус
        </Link>
      </Menu.Item>
      <Menu.Item key="stat" className="nav-menu__item">
        <Link to={routesMap.statistic}>
          <img src={StatSvg} alt="Stat icon" className="nav-menu__icon" />
          Статистика
        </Link>
      </Menu.Item>
      <Menu.Item key="info" className="nav-menu__item">
        <Link to={routesMap.information}>
          <img src={InfoSvg} alt="Information icon" className="nav-menu__icon" />
          Информация
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
