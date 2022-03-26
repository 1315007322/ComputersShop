import { getList } from '@src/api/address'
import { Table } from 'antd'
import React, { useEffect } from 'react'
import { column } from './config'

const Index = () => {

    useEffect(() => {
        getaddressList()
    }, [])


    const getaddressList = () => {
        getList().then((result: any) => {
            console.log(result)
        }).catch((err) => {
            console.log(err);

        });
    }
    return (
        <div>
            <Table columns={column} dataSource={[]} />
        </div>

    )
}

export default Index