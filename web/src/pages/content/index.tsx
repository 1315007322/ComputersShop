import React from 'react'
import BasicLayout from '@src/layout'
import { Outlet } from 'react-router-dom'

export default function Content() {
    return (
        <BasicLayout>
            <Outlet />
        </BasicLayout>
    )
}
