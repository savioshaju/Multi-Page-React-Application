import React from 'react'

const AboutPage = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-white to-gray-100 px-6">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About This Application</h1>
                <p className="text-lg text-gray-600">
                    This application demonstrates the use of <span className="font-semibold text-blue-500">React Router</span> to build a clean, multi-page interface that includes <strong>Home</strong>, <strong>About</strong>, <strong>Users List</strong>, and <strong>User Detail</strong> pages.
                    <br /><br />
                    It showcases dynamic routing, parameterized URLs, and a persistent navigation bar that provides a smooth and intuitive user experience. Styling is handled using <span className="font-semibold text-blue-500">Tailwind CSS</span> for responsiveness and visual consistency.
                    <br /><br />
                     This application is built to display a list of users along with their details such as name and email. It provides a simple interface to view and explore user information.
                    
                </p>
            </div>
        </div>
    )
}

export default AboutPage
