import React, { useEffect, useState } from 'react'
import { getPhotosList } from '@api/photos'
import { Card, Col, List, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styled from 'styled-components'
import { history } from '@utils/router';

const Index = () => {
    const [loading, setloading] = useState<boolean>(false)
    const [dataSource, setDateSource] = useState<[{ [key: string]: any }]>([{}])
    const [pageOptions, setPageOptions] = useState<{ pageNum: number, pageSize: number, total: number }>({
        pageNum: 1,
        pageSize: 8,
        total: 0
    })


    useEffect(() => {
        getList()
    }, [])


    const getList = () => {
        setloading(true)

        getPhotosList({
            pageSize: pageOptions.pageSize,
            pageNum: pageOptions.pageNum
        }).then(
            (res: any) => {
                console.log(res);
                setDateSource(res.records)
                pageOptions.total = res['total']
                setloading(false)
            }
        )
    }

    //查看相册详情页面
    const checkPhoto = (photosId: number) => {
        history.push('/photos/detail', {
            photosId
        })
    }

    const renderCards = () => {
        return (
            <List
                loading={loading}
                size='small'
                grid={{ column: 4,xs: 1 }}
                pagination={{
                    onChange: page => {
                        console.log(page);
                        pageOptions.pageNum = page
                        setPageOptions({ ...pageOptions })
                    },
                    pageSize: pageOptions.pageSize,
                    total: pageOptions.total,
                    showTotal: total => `共 ${total} 篇文章`
                }}
                dataSource={dataSource}
                renderItem={(item: any) => (
                    <Card
                        hoverable
                        style={{ margin: '0 10px 10px' }}
                        cover={<img alt={item.title} src={item.coverImg} />}
                        onClick={() => checkPhoto(item.id)}
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>

                )}
            />
        )

    }


    return (
        <Wrap>
            {dataSource && renderCards()}
        </Wrap>
    )
}


const Wrap = styled.div`
    .ant-spin-container{
        min-height: 761px;
    }
`
export default Index;