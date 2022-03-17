import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getList } from '@api/home'
import { history } from '@utils/router';

const IconText = ({ icon, text }: { [key: string]: any }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


const Index = () => {
    const [loading, setloading] = useState<boolean>(false)
    const [dataSource, setDateSource] = useState<[{ [key: string]: any }]>([{}])
    const [pageOptions, setPageOptions] = useState<{ pageNum: number, pageSize: number, total: number }>({
        pageNum: 1,
        pageSize: 5,
        total: 0
    })

    useEffect(() => {
        // getArticleList()

    }, [pageOptions.pageNum, pageOptions.pageSize])

    //获取后台文章列表
    const getArticleList = () => {
        setloading(true)
        getList({
            pageNum: pageOptions.pageNum,
            pageSize: pageOptions.pageSize
        }).then(
            (res: any) => {
                console.log(res);
                setDateSource(res.records)
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
                itemLayout="vertical"
                size="large"
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
                    <List.Item
                        className='list_item'
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt={item.title}
                                src={item.coverImg}
                            />
                        }
                    >
                        <List.Item.Meta
                            title={<span className='title' onClick={() => checkArticle(item.id)}>{item.title}</span>}
                            description={item.description}
                        />
                        {/* {item.content} */}
                    </List.Item>
                )}
            />
        )

    }
    return (
        <Wrap>
            {/* {renderCards()} */}
        </Wrap>

    )

}


const Wrap = styled.div`
    .list_item{
        background-color: #fff;
        margin-bottom: 15px;
    }
    .ant-list-item-meta-description{
        /* overflow:hidden; 
        text-overflow:ellipsis; 
        white-space:nowrap; 
        height: 50px; */
    }
    .title{
        cursor: pointer;
    }
    .title:hover{

    }
    .ant-list-item-extra{
        display: flex;
        align-items: center;
        img{
            max-height: 102px;
        }
    }
    .ant-list{
        min-height: 793px;
    }
    
`

export default Index;