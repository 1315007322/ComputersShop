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
import Home from '@pages/home'
import Photos from '@src/pages/photos/list'
import Projects from '@src/pages/content/projects'
import Article from '@src/pages/article'
import PhotosDetail from '@pages/photos/detail'
import { Navigate } from 'react-router-dom'
import Login from '@src/pages/user/login'



const routes = [
    {
        path: '/login',
        index: true,
        component: <Login />,
        name: '登录页',
        isMenu: false,
    },
    {
        path: '/',
        index: true,
        component: <Home />,
        name: '主页',
        icon: <AiOutlineHome />,
        isMenu: true,
        childrens: [
        ]
    },
    {
        path: '/article',
        component: <Article />,
        name: 'article'
    },
    {
        path: '/projects',
        component: <Projects />,
        name: '项目',
        icon: <FiGithub />,
        isMenu: true
    },
    {
        path: '/photos',
        component: <Photos />,
        name: '相册',
        icon: <HiOutlinePhotograph />,
        isMenu: true
    },
    {
        path: '/photos/detail',
        component: <PhotosDetail />,
        name: '相册',
    },
    {
        path: '*',
        component: <Home />,
        name: '404',
    },
]

export default routes;