import React, { FC, useEffect, useState } from 'react'
import { UserLogin } from '@src/api/user';
import { Button, Checkbox, Col, Form, Input, message, Modal, Row, Select } from 'antd';
import { ChangeUserInfo } from '@api/user'
import { history } from '@utils/router';
import type { address } from '../data';
import { ChineseDistricts } from '../config'
import { addAddress, updateAddress } from '@src/api/address';

const { Option } = Select;

type Props = {
    visible: boolean,
    onOk: () => void;
    oncancel: () => void;
    initData?: address | null;
}


const AddOrEditForm: FC<Props> = (props: Props) => {
    const { visible, oncancel, onOk, initData } = props;
    const [form] = Form.useForm();
    const [isEdit, setEdit] = useState<boolean>(false);
    const [provinceName, setProvinceName] = useState<string>()
    const [cityName, setCityName] = useState<string>()


    useEffect(() => {
        if (initData) {
            setEdit(true)
            form.setFieldsValue({
                ...initData
            })
        }
    }, [visible])


    const getApi = () => {
        return isEdit ? updateAddress : addAddress;
    }

    const onFinish = (values: any) => {
        console.log(values);
        getApi()({
            ...values,
            isDefault: Number(values.isDefault),
            aid: isEdit ? initData?.aid : undefined
        }).then(
            res => {
                console.log(res);
                message.success(isEdit ? "编辑成功" : "添加成功")
                onOk()
            }
        )
    }



    const getprovinceName = (): Array<JSX.Element> => {
        let data: { [key: string]: string } = ChineseDistricts['86']

        let result: Array<JSX.Element> = []
        Object.keys(data).map((item: string) => {
            result.push(<Option key={item} value={item}>{data[item]}</Option>)
        })
        return result
    }


    const getcityName = (): Array<JSX.Element> | null => {

        if (provinceName) {
            let data: { [key: string]: string } = ChineseDistricts[provinceName]
            if (data) {
                let result: Array<JSX.Element> = []
                Object.keys(data).map((item: string) => {
                    result.push(<Option key={item} value={item}>{data[item]}</Option>)
                })
                return result
            }
            return null;
        }

        return null;
    }

    const getareaName = (): Array<JSX.Element> | null => {
        if (cityName) {
            let data: { [key: string]: string } = ChineseDistricts[cityName]
            if (data) {
                let result: Array<JSX.Element> = []
                Object.keys(data).map((item: string) => {
                    result.push(<Option key={item} value={item}>{data[item]}</Option>)
                })
                return result
            }
            return null;
        }
        return null;
    }




    return (
        <Modal
            width={800}
            title={isEdit ? "修改地址" : "新增地址"}
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
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="省份"
                            name="provinceCode"
                            rules={[{ required: true, message: '请选择省份' }]}
                        >
                            <Select defaultValue={"请选择省份"} style={{ width: 120 }} onChange={(value: string) => setProvinceName(value)}>
                                {getprovinceName()}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="市"
                            name="cityCode"
                            rules={[
                                { required: true, message: '请选择市' },
                            ]}
                        >
                            <Select defaultValue={"请选择市"} style={{ width: 120 }} onChange={(value: string) => setCityName(value)}>
                                {provinceName && getcityName()}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="区"
                            name="areaCode"
                            rules={[
                                { required: true, message: '请选择区' },
                            ]}
                        >
                            <Select defaultValue={"请选择区"} style={{ width: 120 }} onChange={() => { }}>
                                {cityName && getareaName()}
                            </Select>
                        </Form.Item>
                    </Col>

                </Row>

                <Form.Item
                    label="详细地址信息"
                    name="address"
                    rules={[
                        { required: true, message: '请输入详细地址信息' },
                    ]}
                >
                    <Input placeholder="请输入详细地址信息" />
                </Form.Item>
                <Form.Item
                    label="收货人"
                    name="name"
                    rules={[
                        { required: true, message: '请输入收货人' },
                    ]}
                >
                    <Input placeholder="请输入收货人" />
                </Form.Item>
                <Form.Item
                    label="电话"
                    name="phone"
                    rules={[
                        { required: true, message: '请输入电话' },
                    ]}
                >
                    <Input placeholder="请输入电话" />
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item name="isDefault" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>是否为默认地址</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                            <Button type="primary" htmlType="submit" block>
                                提交
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>


            </Form>
        </Modal >
    )
}

export default AddOrEditForm;