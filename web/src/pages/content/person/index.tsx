import { Button, Descriptions, Image } from 'antd';
import React from 'react'
import styled from 'styled-components';

const Person = () => {
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
                        <Button type="default">修改密码</Button>
                        <Button type="primary">编辑</Button>
                    </div>
                }
            >
                <Descriptions.Item label="账号">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="电话">1810000000</Descriptions.Item>
                <Descriptions.Item label="邮箱">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="性别">empty</Descriptions.Item>
            </Descriptions>
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
export default Person;