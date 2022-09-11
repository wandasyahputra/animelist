import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import AnimeList from './pages/animeList'

function RouterList() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AnimeList />} />
      </Routes>
      <Navbar />
    </div>
  )
}
export default RouterList