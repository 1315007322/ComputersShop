import { history } from '@utils/router'
import { Dropdown, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react'
import { userStore } from '../../store/user'

type loginOrReg = "LOGIN" | "REG";

export const TopHeader = () => {

    const [user, setUser] = useState<any>(null)

    // useEffect(() => {
    //     getUserDetail()
    // }, [])

    const getUserDetail = () => {
        // let userData = JSON.parse(localStorage.getItem('user') || '[]')
        // if (Object.prototype.toString.call(userData) === '[object Object]') {
        //     setUser(userData);
        // }
        console.log("qqqqqqq");
        
        console.log(userStore.user);
        
        setUser(userStore.user.username);

    }

    const ToLogin = (type: loginOrReg) => {
        history.push('/login', {
            type
        })
    }

    const menu = (
        <Menu>
            <Menu.Item onClick={() => { history.push('/person') }}>
                个人中心
            </Menu.Item>
            <Menu.Item onClick={() => { history.push('/address') }} >
                收货地址
            </Menu.Item>
        </Menu>
    );
    return (
        <Wrap>
            <div className='base_content'>
                <p>
                    欢迎来到本网站~
                </p>
                {userStore.user.username ?
                    <p>
                        尊敬的
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {userStore.user.username}
                            </a>
                        </Dropdown>
                        贵宾
                    </p>
                    :
                    <p>
                        <span className='link' onClick={() => ToLogin('LOGIN')}>登录</span>
                        <span className='link' onClick={() => ToLogin('REG')}>注册</span>
                    </p>
                }

            </div >
        </Wrap >
    )
}


const Wrap = styled.div`
    background-color: #efefef;
`


export default observer(TopHeader);