import React from 'react'
import { css } from '@emotion/css'
import { ItemThumbnailProps } from './itemThumbnail.types'

function ItemThumbnail({
  episode,
  cover,
  title,
  id,
  mode = "collection"
}:ItemThumbnailProps):React.ReactElement<ItemThumbnailProps> {
  const thumbnail = css`
    margin: 1%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 48%;
    max-width: 230px;
    height: 100vh;
    max-height: 300px;
    box-shadow: 0px 5px 5px rgb(0 0 0 / 10%);
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover
    }
    .information {
      position: absolute;
      color: white;
      top: 0px;
      height: 100%;
      width: 100%;
      display: inline-flex;
      left: 0px;
      top: 0px;
      flex-direction: column;
      justify-content: space-between;
      & > * {
        padding: 8px;
        background: rgba(0,0,0,0.7)
      }
    }
  `
  console.log('rerender', title)
  return (
    <div className={thumbnail}>
      <img src={cover} alt="anime" />
      <div className="information">
        <div className="episodes">{mode === 'collection' ? episode + ' in list' : 'Episodes ' + episode}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  )
}
export default ItemThumbnail