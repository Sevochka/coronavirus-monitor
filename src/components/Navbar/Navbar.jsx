import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';

import './Navbar.css';

const Navbar = () => {

    let [current, setCurrent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        // this.setState({ current: e.key });
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="light" className="nav-menu">
            <Menu.Item key="coronavirus" icon={<MailOutlined />}>
                Коронавирус
            </Menu.Item>
            <Menu.Item key="stat" icon={<AppstoreOutlined />}>
                Статистика
            </Menu.Item>
            <Menu.Item key="info" icon={<AppstoreOutlined />}>
                Информация
            </Menu.Item>
        </Menu>
    );

}


export default Navbar;