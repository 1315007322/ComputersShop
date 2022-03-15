import React, { useState } from 'react'
import styled from 'styled-components';
import Login from './components/login';
import Reg from './components/reg';

export default function Home() {
    const [isLogin, setIslogin] = useState<boolean>(true);

    const changeIsLogin = (type: boolean) => {
        setIslogin(type)
    }
    return (
        <Wrap>
            <h1>电脑商城</h1>
            {isLogin ? (
                <Login changeIsLogin={changeIsLogin}/>
            ) :
                (
                    <Reg  changeIsLogin={changeIsLogin}/>
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