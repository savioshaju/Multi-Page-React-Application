import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import UsersPage from './Pages/UsersPage'
import Header from './Components/Header'
import MainLayout from './layout/MainLayout'
import UsersDetails from './Pages/UsersDetails'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='user/:id' element={<UsersDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
