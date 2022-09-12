import React from 'react'
import { css } from '@emotion/css'
import ReactDOM from 'react-dom'

function Modal () {
const modalStyle = css`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3)
`

  return (
    <ModalPortal>
      <div className={modalStyle}>
        modal
      </div>
    </ModalPortal>
  )
}

function ModalPortal(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  const root = document.getElementsByTagName('body')[0]
  return ReactDOM.createPortal(
    props.children,
    root
  )
}

export default Modal