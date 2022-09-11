import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnimeList from './pages/animeList'

function RouterList() {
  return (
    <Routes>
      <Route path='/' element={<AnimeList />} />
    </Routes> 
  )
}
export default RouterList