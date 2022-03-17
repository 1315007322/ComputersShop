import { UserLogin } from '@src/api/user';
import { Button, Form, Input, Modal } from 'antd';
import React from 'react'
import { ChangePw } from '@api/user'

interface Props {
    visible: boolean,
    oncancel: () => void;
}

const ChangePwModal = (props: Props) => {

    const { visible, oncancel } = props;
    const [form] = Form.useForm();

    const onFinish = () => {

    }


    return (
        <Modal
            title="修改密码"
            visible={visible}
            onCancel={() => oncancel()}
            footer={() => { }}
        >
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="原密码"
                    name="oldpassword"
                    rules={[{ required: true, message: '请输入原密码' }]}
                >
                    <Input placeholder="请输入原密码" />
                </Form.Item>
                <Form.Item
                    label="新密码"
                    name="newpassword"
                    rules={[
                        { required: true, message: '请输入原密码' },

                    ]}
                >
                    <Input placeholder="请输入新密码" />
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="Confrmepassword"
                    rules={[
                        { required: true, message: '请输入新密码' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newpassword') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject(new Error('请再次输入密码，并确认两次输入密码一致'))
                            },
                        }),
                    ]}
                >
                    <Input placeholder="请输入新密码" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                    <Button type="primary" htmlType="submit" block>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ChangePwModal;