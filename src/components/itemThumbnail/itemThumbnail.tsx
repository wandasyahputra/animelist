import React from 'react'
import { css } from '@emotion/css'
import { itemThumbnailProps } from './itemThumbnail.types'

function ItemThumbnail({
  episode,
  cover,
  title,
  id
}:itemThumbnailProps):React.ReactElement<itemThumbnailProps> {
  const thumbnail = css`
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 230px;
    height: 100vh;
    max-height: 300px;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
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
  return (
    <div className={thumbnail}>
      <img src={cover} alt="anime" />
      <div className="information">
        <div className="episodes">Episodes {episode}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  )
}
export default ItemThumbnail