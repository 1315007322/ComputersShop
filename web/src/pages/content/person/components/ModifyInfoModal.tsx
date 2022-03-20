import React, { FC, useEffect } from 'react'
import { UserLogin } from '@src/api/user';
import { Button, Form, Input, message, Modal, Radio } from 'antd';
import { ChangeUserInfo } from '@api/user'
import { history } from '@utils/router';


interface Props {
    visible: boolean,
    onOk: (data: User) => void;
    oncancel: () => void;
    initData: User;
}


const ModifyInfoModal: FC<Props> = (props: Props) => {
    const { visible, oncancel, onOk, initData } = props;
    const [form] = Form.useForm();

    useEffect(() => {
        if (initData){
            form.setFieldsValue({
                ...initData
            })
        }
    }, [visible])

    const onFinish = (values: any) => {
        console.log(values);
        ChangeUserInfo({
            ...values
        }).then(
            res => {
                console.log(res);
                message.success("修改成功")
                form.resetFields();
                onOk(values)
            }
        )
        console.log(values);
    }

    return (
        <Modal
            title="修改信息"
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
                    label="手机号"
                    name="phone"
                    rules={[{ required: true, message: '请输入手机号' }]}
                >
                    <Input placeholder="请输入手机号" />
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[
                        { required: true, message: '请输入邮箱' },

                    ]}
                >
                    <Input placeholder="请输入邮箱" />
                </Form.Item>
                <Form.Item
                    label="性别"
                    name="gender"
                    rules={[
                        { required: true, message: '请输入邮箱' },
                    ]}
                    initialValue={1}
                >
                    <Radio.Group name="radiogroup">
                        <Radio value={0}>女</Radio>
                        <Radio value={1}>男</Radio>

                    </Radio.Group>
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

export default ModifyInfoModal;