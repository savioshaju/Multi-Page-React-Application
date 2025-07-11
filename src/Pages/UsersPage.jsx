import React from 'react'
import users from '../data/users'
import { Link } from 'react-router-dom'
const UsersPage = () => {

    return (
        <div className="min-h-screen bg-gray-50 p-8 pt-24">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Users</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                    <Link to={`/user/${user.id}`}
                       key={user.id} className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition flex gap-5 ">
                        <div className='flex justify-center items-center'>
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                        </div>
                        <div className='flex flex-col text-left'>
                            <h2 className="text-xl font-semibold mb-4">{user.name}</h2>
                            <p className="text-sm text-gray-500 flex gap-1 mb-2 hover:text-blue-600 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-blue-600 pt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                                {user.email}
                            </p>
                            <p className="text-sm text-gray-400 flex gap-1 hover:text-blue-600 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-blue-600 pt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                {user.phno}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default UsersPage