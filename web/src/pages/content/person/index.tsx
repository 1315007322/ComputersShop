import { UserloginOut } from '@src/api/user';
import { userStore } from '@src/store/user';
import { RenderGender } from '@utils/common';
import { Button, Descriptions, Image } from 'antd';
import { observer } from 'mobx-react';
import React, { useState } from 'react'
import styled from 'styled-components';
import ChangePwModal from './components/ChangePwModal';
import ModifyInfoModal from './components/ModifyInfoModal';

const Person = () => {
    const [changePwVisible, setChangePwVisible] = useState<boolean>(false)
    const [changeInFoVisible, setChangeInFoVisible] = useState<boolean>(false)


    const [userInfo, setUserInfo] = useState<User>(
        JSON.parse(localStorage.getItem('user') || '[]')
    )

    const changeInfoHandleOk = (data: User) => {
        let user = {
            ...userInfo,
            ...data
        }
        setUserInfo(user)
        localStorage.setItem('user', JSON.stringify(user))
        setChangeInFoVisible(false)
    }


    const loginout = () => {
        UserloginOut().then(
            res => {
                userStore.delete();
            },
            err => { }
        )
    }

    return (
        <Wrap>
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Descriptions
                className='detail'
                title="基本信息"
                extra={
                    <div>
                        <Button type="default" onClick={() => {
                            setChangePwVisible(true)
                        }}>修改密码</Button>
                        <Button type="primary" onClick={() => {
                            setChangeInFoVisible(true)
                        }}>编辑</Button>
                    </div>
                }
            >
                <Descriptions.Item label="用户名">{userInfo.username || '- -'}</Descriptions.Item>
                <Descriptions.Item label="电话">{userInfo.phone || '- -'}</Descriptions.Item>
                <Descriptions.Item label="邮箱">{userInfo.email || '- -'}</Descriptions.Item>
                <Descriptions.Item label="性别">{RenderGender(userInfo.gender)}</Descriptions.Item>
            </Descriptions>
            <Button type="primary" danger onClick={loginout}>退出登录</Button>

            <ChangePwModal visible={changePwVisible} oncancel={() => { setChangePwVisible(false) }} />
            <ModifyInfoModal
                visible={changeInFoVisible}
                onOk={changeInfoHandleOk}
                initData={userInfo}
                oncancel={() => { setChangeInFoVisible(false) }}
            />
        </Wrap>
    )
}

const Wrap = styled.div`
    .ant-btn{
        margin: 0 8px;
    }
    display: flex ;
    .detail{
        flex: 1;
        margin-left: 20px;
    }
`
export default observer(Person);