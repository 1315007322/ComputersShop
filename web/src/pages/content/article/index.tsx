import React, { useEffect, useState } from 'react'
import { history } from '@utils/router'
import { getBlogDetail } from '@api/article'
import { MdToHtml } from '@utils/marked'
import styled from 'styled-components'
import { Typography } from 'antd'
import 'highlight.js/styles/github-dark.css'

const { Title } = Typography
//查看图片
const viewIamge = () => {
    return (
        <Title level={2}>123</Title>
    )
}
const Article = () => {
    const [data, setData] = useState<any>({
        title: '',
        content: ''
    })


    useEffect(() => {
        getDetail()

        console.log(viewIamge());

    }, [])

    const getDetail = () => {
        if (history.location.state && history.location.state.articleId) {
            getBlogDetail({ id: Number(history.location.state.articleId) }).then(
                (res: any) => {
                    if (res) setData(res)
                }
            )
        }
        else history.push('/')
    }

    return (
        <Wrap>
            <Title level={2}>{data.title}</Title>
            <div>{MdToHtml(data.content)}</div>
        </Wrap>
    )
}

const Wrap = styled.div`
    max-width: 1200px;
    margin: auto;
    .markdown-body{
        .article_img{
            display: flex;
            justify-content: center;
            img{
                width: 100%;
                cursor: pointer;
            }
        }
    }
    p{
        display: inline-block;
    }
    .tip{
        
    }
`
export default Article;