import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';

import './Navbar.css';

const Navbar = () => {

    let [current, setCurrent] = useState('mail');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="light" className="nav-menu">
            <Menu.Item key="coronavirus" className="menu-item" icon={<MailOutlined />}>
                <span>Коронавирус</span>
            </Menu.Item>
            <Menu.Item key="stat" className="menu-item" icon={<AppstoreOutlined />}>
                Статистика
            </Menu.Item>
            <Menu.Item key="info" className="menu-item" icon={<AppstoreOutlined />}>
                Информация
            </Menu.Item>
        </Menu>
    );

}


export default Navbar;