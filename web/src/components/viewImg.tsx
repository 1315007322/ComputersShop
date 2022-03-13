import React, { useState, useEffect } from 'react'
import { Image } from 'antd'


interface props {
    visible: boolean
    url: string

}

const ViewImg = (props: props) => {
    const { visible, url } = props

    return (
        <Image src={url} />
    )
}


export default ViewImg;