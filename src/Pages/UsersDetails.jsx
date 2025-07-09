import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import users from '../data/users'
import BackButton from '../Components/BackButton'
const UsersDetails = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const currentUser = users.find(u => u.id.toString() === id)
        setUser(currentUser)
    }, [id])

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
                <p className="text-lg text-blue-700 max-w-md">
                    Loading ....
                </p>
            </div>
        )
    }

    return (
        <>


            <BackButton />
            <div className='pt-24 px-6 min-h-screen flex  justify-center items-center bg-gradient-to-br from-white via-slate-100 to-slate-300'>
                <div className='w-full max-w-xl bg-white/80 backdrop-blur-md border border-slate-300 rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row items-center gap-6'>

                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-blue-500 shadow-md"
                    />

                    <div className='flex flex-col text-left space-y-3'>
                        <h2 className="text-2xl font-bold text-blue-900">{user.name}</h2>
                        <p className="text-md text-gray-700">Age: <span className="font-medium text-gray-600">{user.age}</span></p>

                        <p className="text-sm text-gray-700 flex gap-2 items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-600 pt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>

                            DOB: {user.dob}
                        </p>

                        <p className="text-sm text-gray-700 flex gap-2 items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-blue-600 pt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            {user.adre}
                        </p>

                        <p className="text-sm text-gray-500 flex gap-1 mb-2 hover:text-blue-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-blue-600 pt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            {user.email}
                        </p>
                        <p className="text-sm text-gray-500 flex gap-1 hover:text-blue-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-blue-600 pt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            {user.phno}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersDetails
