import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import routes from '@src/config/routes'
import { history } from '@utils/router';
import logo from '@src/assets/logo.gif'
import { RiMenuFoldLine } from 'react-icons/ri'

const { SubMenu } = Menu;
const Nav = () => {
    const [current, setCurrent] = useState<string>('/')

    useEffect(() => {
        let arr = routes.filter((item: any) => {
            return item.isMenu
        })
        console.log(arr);
        arr.forEach((item: any) => {
            if (location.hash.includes(item.path)) {
                setCurrent(item.path)
            } else {
                return
            }
        })

    })
    history.listen(({ action, location }: any) => {
        console.log(
            `The current URL is ${location.pathname}${location.search}${location.hash}`
        );
        console.log(`The last navigation action was ${action}`);
        console.log(location.pathname, location.search, location.hash);
    });

    const handleClick = (e: any) => {
        setCurrent(e.key)
        history.push(e.key)
    };
    return (
        <Wrap>
            <div className="base_content">
                <Menu
                    onClick={handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    overflowedIndicator={<RiMenuFoldLine />}
                >
                    {routes && routes.length > 0 && (
                        routes.map((item: any) => {
                            if (item.isMenu) {
                                return <Menu.Item key={item.path} icon={item.icon}>{item.name}</Menu.Item>
                            }
                        })
                    )}
                </Menu>

            </div>

        </Wrap >

    );
}

const Wrap = styled.div`
    /* display: flex;
    justify-content: center; */
    .logo{
        float: left;
        width: 120px;
        height: 44px;
        img{
            height: 100%;
            border-radius: 50%;
        }
    }
`

export default Nav;