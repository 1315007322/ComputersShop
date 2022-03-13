import React from 'react'
import { UserReg } from '@src/api/user';
import { Button, Checkbox, Form, Input, message } from 'antd'
import styled from 'styled-components';

export default function Login() {
    const onFinish = (values: User) => {
        console.log('Success:', values);
        UserReg(values).then(
            res => {
                message.success("注册成功！")
            }
        ).catch(err => {})
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Wrap>
            <h1>电脑商城</h1>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input placeholder='请输入用户名'/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder='请输入密码'/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
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
`