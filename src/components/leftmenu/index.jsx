import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import 'antd/dist/antd.css'
import './index.css'
import {menuData} from './menudata'

const {Sider} = Layout

export const LeftMenu = () => {
    return (
        <Sider className="sider" >
            <Menu mode="inline" className="menu" theme="light">
                {
                    menuData.map((item) => {
                        return (
                            <Menu.Item key={item.key} icon={item.icon} >
                                <Link to={item.path} className={item.className}>{item.title}</Link> 
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
}
