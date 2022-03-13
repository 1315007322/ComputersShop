import React, { useState, useEffect } from 'react'
import { Image, List } from 'antd'
import { getPhotosDetail } from '@api/photos'
import styled from 'styled-components';
import { history } from '@utils/router';

const Detail = () => {

    const [loading, setloading] = useState<boolean>(false)
    const [dataSource, setDateSource] = useState<[{ [key: string]: any }]>([{}])
    const [pageOptions, setPageOptions] = useState<{ pageNum: number, pageSize: number, total: number }>({
        pageNum: 1,
        pageSize: 5,
        total: 0
    })

    useEffect(() => {
        getPhotoDetail()
    }, [])



    const getPhotoDetail = () => {
        if (history.location.state && history.location.state.photosId) {
            getPhotosDetail({
                pageNum: pageOptions.pageNum,
                pageSize: pageOptions.pageSize,
                id: history.location.state.photosId
            }).then(
                (res: any) => {
                    console.log(res);
                    setDateSource(res.records)
                    pageOptions.total = res['total']
                    setloading(false)
                }
            )
        }
        else history.push('/photos')

    }







    const renderCards = () => {
        return (
            <List
                loading={loading}
                itemLayout="vertical"
                size="large"
                grid={{ column: 4, }}
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
                    <div className='Img'>
                        <Image src={item.coverImg} />
                    </div>
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
    .Img{
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 5px 0px #999;
        min-height: 250px;
        padding: 5px;
        background-color: #efefef;
        margin: 10px;
    }
    .ant-list{
        min-height: 793px;
    }
`

export default Detail;