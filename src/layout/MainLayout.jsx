import React from 'react'
import Header from '../Components/Header'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()
    const noHeaderRoutes = ['/user/:id']

    const pathname = location.pathname
    const shouldShowHeader = !pathname.startsWith('/user/')

    return (
        <>
            {shouldShowHeader && <Header />}
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
