import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd'
import { UserLogin } from '@src/api/user';
import { history } from '@utils/router';
import { observer } from 'mobx-react';
import { userStore } from '@src/store/user';

interface Props {
    changeIsLogin: (type: boolean) => void;
}

const Login = (props: Props) => {
    const { changeIsLogin } = props
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values: { username: string, password: string }) => {
        setLoading(true)
        UserLogin(values).then(
            (res: any) => {
                form.resetFields();
                message.success("登录成功！")
                userStore.setUser(res)
                history.push('/home')
                setLoading(false)
            }
        ).catch(err => { setLoading(false) })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            form={form}
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
                <Input placeholder='请输入用户名' />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password placeholder='请输入密码' />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                <Button type="primary" htmlType="submit" block>
                    登录
                </Button>
                <div className='tips'>
                    <p></p>
                    <p onClick={() => {
                        form.resetFields();
                        changeIsLogin(false)
                    }}>没有账号？去注册 </p>
                </div>
            </Form.Item>
        </Form>
    )
}


export default observer(Login);