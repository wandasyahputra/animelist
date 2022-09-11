import React from 'react'
import { Link } from 'react-router-dom'
import { IconListSVG } from '../../assets/img/list'

function Navbar() {
  return (
    <div>
      <Link to="/">
        <IconListSVG
          width={25}
        />
        AnimeList
      </Link>
      <Link to="/tag">
        Tag
      </Link>
    </div>
  )
}
export default Navbar