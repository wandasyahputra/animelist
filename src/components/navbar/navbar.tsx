import React from 'react'
import { Link } from 'react-router-dom'
import { CollectionSVG } from '../../assets/img/collection'
import { IconListSVG } from '../../assets/img/list'
import { css } from '@emotion/css'
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navbarStyle = css`
    display: flex;
    background-color: rgb(39, 39, 39);
    position: fixed;
    bottom: 0px;
    width: 100%;
    border-top: solid 1px rgb(70, 70, 70);
    a {
      color: white;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-weight: 400;
      transition: .3s;
      padding: 10px;
      svg {
        padding: 0 5px;
      }
      &.active {
        color: #009442;
        svg {
          fill: #009442;
        }
      }
    }
  `

  return (
    <div className={navbarStyle}>
      <Link to="/" className={location.pathname === '/' ? 'active' : '' }>
        <IconListSVG
          width={25}
          fill="white"
          />
        AnimeList
      </Link>
      <Link to="/collection" className={location.pathname === '/collection' ? 'active' : '' }>
        <CollectionSVG
          width={25}
          fill="white"
        />
        Collection
      </Link>
    </div>
  )
}
export default Navbar