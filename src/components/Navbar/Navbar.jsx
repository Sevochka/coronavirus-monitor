import React from 'react';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import { useState } from 'react';
import VirusSvg from "../../assets/virus.svg";
import StatSvg from "../../assets/statistics.svg";
import InfoSvg from "../../assets/info.svg"


import './Navbar.css';

const Navbar = () => {

    let [current, setCurrent] = useState('mail');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" className="nav-menu">
            <Menu.Item key="coronavirus" className="menu-item">
                <img src={VirusSvg} alt="Virus icon" className="icon" />
                Коронавирус
            </Menu.Item>
            <Menu.Item key="stat" className="menu-item" >
                <img src={StatSvg} alt="Stat icon" className="icon" />
                Статистика
            </Menu.Item>
            <Menu.Item key="info" className="menu-item" >
                <img src={InfoSvg} alt="Information icon" className="icon" />
                Информация
            </Menu.Item>
        </Menu>
    );

}


export default Navbar;