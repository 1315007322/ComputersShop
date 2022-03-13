import React from 'react'
import MarkDown from 'marked-react';
import { Typography, Image } from 'antd';
import Highlight from 'react-highlight.js';

const { Title } = Typography

//render 重写
const renderer: any = {
  // 重写MD 标题
  heading(text: string, level: 5 | 1 | 2 | 3 | 4 | undefined) {

    const escapedText = text[0].toLowerCase().replace(/[^\w]+/g, '-');
    return (
      <Title level={level} key={text}>{text}</Title>
    )
  },
  image(href: string, title: string, text: string) {
    return (
      <Image src={href} key={text} />
    )
  },
  paragraph(text: string) {
    return (
      <div key={Math.random()} style={{ margin: '10px 0' }}>
        {text}
      </div>
    )
  },
  code(text: string, language: string) {
    return (
      <Highlight language={language} key={text}>
        {text}
      </Highlight>
    )
  }
};


export const MdToHtml = (data: string) => {

  return (
    <MarkDown value={data} renderer={renderer} />
  )
}



