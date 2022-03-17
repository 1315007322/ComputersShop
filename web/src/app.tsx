import React, { useEffect, useState } from 'react'
import './app.less'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd'
import routes from '@src/config/routes'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/user/LoginOrReg';
import Content from './pages/content';
import LoginOrReg from './pages/user/LoginOrReg';
const App = () => {

    return (
        <ConfigProvider locale={zhCN}>
            <Routes>
                <Route path='/login' element={<LoginOrReg />}></Route>
                <Route path='/' element={<Content />}>
                    {
                        routes && routes.length > 0 && (
                            routes.map((item: any) => {
                                return (
                                    <Route index={item.index} path={item.path} element={item.component} key={item.path} >
                                        {item.childrens && item.childrens.length > 0 && (
                                            item.childrens.map((item: any) => {
                                                <Route index={item.index} path={item.path} element={item.component}></Route>
                                            })
                                        )}
                                    </Route>
                                )
                            })
                        )}
                </Route>
                <Route path='*' element={<Navigate to="/content/home" />}></Route>

            </Routes >
        </ConfigProvider>

    )
}

export default App;