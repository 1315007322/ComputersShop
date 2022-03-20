import { history } from '@utils/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


type loginOrReg = "LOGIN" | "REG";

export const TopHeader = () => {

    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        getUserDetail()
    }, [])

    const getUserDetail = () => {
        
        let userData = JSON.parse(localStorage.getItem('user') || '[]')
        if (Object.prototype.toString.call(userData) === '[object Object]') {
            setUser(userData);
        }
    }

    const ToLogin = (type: loginOrReg) => {
        history.push('/login', {
            type
        })
    }

    return (
        <Wrap>
            <div className='base_content'>
                <p>
                    欢迎来到本网站~
                </p>
                {user ?
                    <p>
                        尊敬的  <span className='link' onClick={() => {history.push('/person')}} > {user.username} </span> 贵宾
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


export default TopHeader;