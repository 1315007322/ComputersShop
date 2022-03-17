import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Login from './components/login';
import Reg from './components/reg';
import { Btn } from 'superyanui/src/components/Button/Button'
import { Typography } from 'antd';
import { getHistoryState } from '@utils/common';

export default function Home() {
    const [isLogin, setIslogin] = useState<boolean>(true);
    const type = getHistoryState().type

    useEffect(() => {
        setIslogin(getHistoryState().type === 'LOGIN')
    },[])

    const changeIsLogin = (type: boolean) => {
        setIslogin(type)
    }
    return (
        <Wrap>
            {/* <Btn label='按钮'></Btn> */}
            <h1></h1>
            <Typography.Title level={2} style={{ marginBottom: 20, textAlign: 'center' }}>
                电脑商城
            </Typography.Title>
            {isLogin ? (
                <Login changeIsLogin={changeIsLogin} />
            ) :
                (
                    <Reg changeIsLogin={changeIsLogin} />
                )}
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 600px;
    margin: auto;
    position: fixed;
    top: 30%;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 5px #000;
    padding: 20px;
    h1{
        text-align: center;
    }
    .tips{
        display: flex;
        line-height: 40px;
        justify-content: space-between;
        p{
            color: blue;
            cursor: pointer;
        }
    }
`