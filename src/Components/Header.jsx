import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useEffect } from 'react'

const Header = () => {
    const [active, setActive] = useState(location.pathname)

    useEffect(() => {
        setActive(location.pathname)
    }, [location.pathname])

    const getLinkClass = (path) => {
        return path === active
            ? 'text-blue-400 font-bold'
            : 'text-red-400 hover:text-blue-600'
    }
    return (
        <header className='fixed top-0 left-0 grid sm:grid-cols-[20%_80%] md:grid-cols-2 lg:grid-cols-2 gap-5 w-full h-20 shadow-md bg-white' >
            <div className='h-full flex items-center'>
            </div>
            <div className=' h-full text-center flex justify-around items-center'>
                <Link

                    className={getLinkClass('/')}
                    children="Home" to="/" />
                <Link

                    className={getLinkClass('/about')}
                    children="About" to="/about" />
                <Link

                    className={getLinkClass('/users')}
                    children="Users" to="/users" />

            </div>
        </header>
    )
}

export default Header