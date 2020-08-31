import React from 'react';
import { Menu } from 'antd';
import { useState } from 'react';
import VirusSvg from "../../assets/virus.svg";
import StatSvg from "../../assets/statistics.svg";
import InfoSvg from "../../assets/info.svg";
import { Link } from 'react-router-dom';

import { routesMap } from "../../routes";
import './Navbar.css';

const Navbar = () => {

    const [current, setCurrent] = useState('mail');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" className="nav-menu">
            <Menu.Item key="coronavirus" className="menu-item">
                <Link to={routesMap.home}>
                    <img src={VirusSvg} alt="Virus icon" className="icon" />
                    Коронавирус
                </Link>
            </Menu.Item>
            <Menu.Item key="stat" className="menu-item">
                <Link to={routesMap.statistic}>
                    <img src={StatSvg} alt="Stat icon" className="icon" />
                    Статистика
                </Link>
            </Menu.Item>
            <Menu.Item key="info" className="menu-item" >
                <Link to={routesMap.information}>
                    <img src={InfoSvg} alt="Information icon" className="icon" />
                Информация
                </Link>
            </Menu.Item>
        </Menu>
    );

};


export default Navbar;