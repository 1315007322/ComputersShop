import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BsGithub } from 'react-icons/bs'
import styled from 'styled-components';
import { Card, List, Tooltip } from 'antd';

const Index = () => {
    const [projectList, setProjectlist] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getList()
    }, [])



    const getList = async () => {
        setLoading(true)
        axios.get('https://api.github.com/users/1315007322/repos').then((res: any) => {
            setProjectlist(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }



    return (
        <Wrap>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 6,
                }}
                loading={loading}
                dataSource={projectList}
                renderItem={(item: any) => (
                    <List.Item>
                        <Card
                            title={<div className='card_title'> <BsGithub className='card_title_icon'/> {item.name}</div>}
                        extra={<a href={item.html_url} target={'_blank'}>访问</a>}
                        >
                            <Tooltip title={item.description}>
                                <div className='description'>{item.description}</div>
                            </Tooltip>,
                        </Card>
                    </List.Item>
                )}
            />

        </Wrap>
    )
}

const Wrap = styled.div`
    .card_title{
        display: flex;
        align-items: center;
        .card_title_icon{
            margin-right: 5px;
        }
    }
    .ant-card-body{
        padding: 15px;
    }
    .description{
        height: 65px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; //多行在这里修改数字即可
        overflow:hidden;
        /* autoprefixer: ignore next */
        -webkit-box-orient: vertical;
    }
    .ant-spin-container{
        min-height: 761px;
    }
`


export default Index;
