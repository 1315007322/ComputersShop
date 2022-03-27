import { getList } from '@src/api/address'
import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import AddOrEditForm from './components/addOrEditForm'
import { column } from './config'
import type { address } from './data'

const Index = () => {
    const [dataSource, setDataSource] = useState<Array<address>>([])
    const [visible, setVisible] = useState<boolean>(false)
    const [editSource, setEditSource] = useState<address | null>();

    useEffect(() => {
        getaddressList()
    }, [])


    const getaddressList = () => {
        getList().then((result: any) => {
            console.log(result)
            setDataSource(result)
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleEdit = (value: address) => {
        setEditSource(value)
        setVisible(true)
    }

    const Onok = () => {
        setEditSource(null)
        setVisible(false)
        getaddressList();
    }
    return (
        <div style={{ width: '100%' }}>
            <Button type='primary' onClick={() => setVisible(true)}>新增地址</Button>
            <Table
                columns={column.concat([
                    {
                        title: "操作",
                        key: 'options',
                        render: (text: string, _: any, index: number) => {
                            return (
                                <div>
                                    <Button
                                        type="primary"
                                        style={{ marginRight: '10px' }}
                                        onClick={() => handleEdit(_)}
                                    >编辑</Button>
                                    <Button type="primary" danger>删除</Button>
                                </div>
                            )
                        }
                    },
                ])}
                dataSource={dataSource}
                rowKey={(record: any) => record.aid}
            />
            <AddOrEditForm
                visible={visible}
                onOk={Onok}
                oncancel={() => setVisible(false)}
                initData={editSource}
            />
        </div>

    )
}

export default Index