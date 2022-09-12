import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import AnimeList from './pages/animeList'
import CollectionList from './pages/collection'
import { css } from '@emotion/css'

function RouterList() {
  const routerStyle = css`margin-bottom: 45px`
  return (
    <div className={routerStyle}>
      <Routes>
        <Route path='/' element={<AnimeList />} />
        <Route path='/collection' element={<CollectionList />} />
      </Routes>
      <Navbar />
    </div>
  )
}
export default RouterList