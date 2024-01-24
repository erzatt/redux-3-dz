import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Home from './pages/Home'
import PaginationPage from './pages/PaginationPage'
import SinglePageApp from './pages/SinglePageApp'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='post_page' element={<PaginationPage/>} />
        <Route path='posts/:pageId' element={<SinglePageApp/>} />
        <Route path='*' element={<div><p>404</p></div>} />
      </Route>
    </Routes>
    </>
  )
}

export default App