import React from 'react'
import { PaginationProps } from './pagination.types'
import { css } from '@emotion/css'

function Pagination({
  currentPage,
  pageLength,
  onChange
}:PaginationProps):React.ReactElement<PaginationProps> {
  const paginationStyle = css`
    padding: 0 5px 10px;
    color: white;
    .information {
      width: 100%;
      display: inline-flex;
      align-items: center;
      padding: 5px 0;
    }
    .pagination {
      width: 100%;
      display: inline-flex;
      justify-content: flex-end;
      span {
        padding: 5px;
        border: solid 1px rgb(70, 70, 70);
        border-radius: 4px;
        min-width: 20px;
        min-height: 20px;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 0 2px;
        font-size: 12px;
        &.active {
          color: #009442;
        }
        &.disabled {
          opacity: .5;
        }
      }
    }
  `

  function handleClick (page: number, disabled: Boolean) {
    if (disabled) return
    onChange(page)
  }
  return (
    <div className={paginationStyle}>
      <div className='information'>
        Page {currentPage} of {pageLength}
      </div>
      <div className='pagination'>
        <span
          onClick={() => handleClick(currentPage - 1, currentPage === 1)}
          className={currentPage === 1 ? 'disabled' : ''}
        >
          &lsaquo;
        </span>
        {currentPage !== 1 && (
          <span
            onClick={() => handleClick(1, false)}
          >
            1
          </span>
        )}
        {currentPage - 2 > 1 && (
          <span>...</span>
        )}
        {currentPage - 1 > 1 && (
          <span
            onClick={() => handleClick(currentPage - 1, false)}
          >{currentPage - 1}</span>
        )}
        <span className='active'>
          {currentPage}
        </span>
        {currentPage + 1 < pageLength&& (
          <span
            onClick={() => handleClick(currentPage + 1, false)}
          >{currentPage + 1}</span>
        )}
        {currentPage + 2 < pageLength && (
          <span>...</span>
        )}
        {currentPage !== pageLength && (
          <span
            onClick={() => handleClick(pageLength, false)}
          >
            {pageLength}
          </span>
        )}
        <span 
          onClick={() => handleClick(currentPage + 1, currentPage === pageLength)}
          className={currentPage === pageLength ? 'disabled' : ''}
        >&rsaquo;</span>
      </div>
    </div>
  )
}
export default Pagination