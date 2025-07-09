import React from 'react'

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-3xl font-bold mb-4 text-blue-400">Welcome to Our App</h1>
            <p className="text-md text-gray-700 max-w-md">
                This simple React app displays a list of users along with their basic details like name and email.
            </p>
        </div>
    )
}

export default HomePage
