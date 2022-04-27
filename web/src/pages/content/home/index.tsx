import { List, Card, Space, Image, Tooltip, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getList } from '@api/products'
import { history } from '@utils/router';
import { ossHeader } from '../address/config';

const IconText = ({ icon, text }: { [key: string]: any }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const { Meta } = Card;

const Index = () => {
    const [loading, setloading] = useState<boolean>(true)
    const [dataSource, setDateSource] = useState<[{ [key: string]: any }]>([{}])
    const [pageOptions, setPageOptions] = useState<{ pageNum: number, pageSize: number, total: number }>({
        pageNum: 1,
        pageSize: 10,
        total: 0
    })

    useEffect(() => {
        getProductsList()
    }, [pageOptions.pageNum, pageOptions.pageSize])

    const getProductsList = () => {
        setloading(true)
        getList({
            pageNum: pageOptions.pageNum,
            pageSize: pageOptions.pageSize
        }).then(
            (res: any) => {
                console.log(res);
                setDateSource(res.list)
                pageOptions.total = res['total']
                setloading(false)
            },
            (error: any) => console.log(error)

        )
    }

    //查看文章页面
    const checkArticle = (articleId: number) => {
        history.push('/article', {
            articleId
        })
    }

    const renderCards = () => {
        return (
            <List
                loading={loading}
                grid={{ gutter: 16, column: 4 }}
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (current: number, size: number) => {
                        pageOptions.pageNum = current
                        pageOptions.pageSize = size
                        setPageOptions({ ...pageOptions })
                    },
                    pageSize: pageOptions.pageSize,
                    total: pageOptions.total,
                    showTotal: total => `共 ${total} 篇文章`
                }}
                dataSource={dataSource}
                renderItem={(item: any) => (
                    <List.Item>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" className='productImg' src={ossHeader + item.image + '1.jpg'} />}
                        >
                            <Tooltip title={item.title}>
                                <Meta title={item.title} />
                            </Tooltip>
                            <div className='actionsBtn'>
                                <Button>收藏</Button>
                                <Button type="primary">加入购物车</Button>
                            </div>
                        </Card>

                    </List.Item>
                )}
            />
        )

    }
    return (
        <Wrap>
            {renderCards()}
        </Wrap>

    )

}


const Wrap = styled.div`
    .list_item{
        background-color: #fff;
        margin-bottom: 15px;
    }
    .productImg{
        width: 100px;
        display: inline-block;
    }
    .ant-card-cover{
        padding-top: 15px;
        text-align: center;
    }
    .actionsBtn{
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
    }
   .ant-card-meta{
       width: 100%;
   }
    .ant-list{
        min-height: 793px;
    }
`

export default Index;