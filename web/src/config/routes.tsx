import React from 'react'
import {
    AiOutlineHome,
} from 'react-icons/ai'
import {
    FiGithub,
} from 'react-icons/fi'
import {
    HiOutlinePhotograph
} from 'react-icons/hi'
import LoginOrReg from '@pages/user/LoginOrReg'
// import Photos from '@src/pages/photos/list'
// import Projects from '@src/pages/content/projects'
// import Article from '@src/pages/article'
// import PhotosDetail from '@pages/photos/detail'
import { Navigate } from 'react-router-dom'
import Home from '@src/pages/content/home'
import Person from '@src/pages/content/person'
import Address from '@src/pages/content/address'



const routes = [
    {
        path: '/home',
        index: true,
        component: <Home />,
        name: '主页',
        icon: <AiOutlineHome />,
        isMenu: true,
        childrens: [
        ]
    },
    {
        path: '/person',
        index: true,
        component: <Person />,
        name: '主页',
        isMenu: false,
        childrens: [
        ]
    },
    {
        path: '/address',
        index: true,
        component: <Address />,
        name: '收货地址',
        isMenu: false,
        childrens: [
        ]
    },

    // {
    //     path: '/article',
    //     component: <Article />,
    //     name: 'article'
    // },
    // {
    //     path: '/projects',
    //     component: <Projects />,
    //     name: '项目',
    //     icon: <FiGithub />,
    //     isMenu: true
    // },
    // {
    //     path: '/photos',
    //     component: <Photos />,
    //     name: '相册',
    //     icon: <HiOutlinePhotograph />,
    //     isMenu: true
    // },
    // {
    //     path: '/photos/detail',
    //     component: <PhotosDetail />,
    //     name: '相册',
    // },
    {
        path: '*',
        component: <Home />,
        name: '404',
    },
]

export default routes;