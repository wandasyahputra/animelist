import React, { MouseEvent } from 'react'
import { css } from '@emotion/css'
import ReactDOM from 'react-dom'
import { ModalPortalProps, ModalProps } from './modal.types'
import { backgroundColor, textColor } from '../../assets/var'

function Modal({
  show,
  children,
  close
}:ModalProps):React.ReactElement<ModalPortalProps> {
  const [modalCName, setModalCName] = React.useState<string>('')
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const modalStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: .3s;
    opacity: 0;
    overflow: scroll;
    background: rgba(255,255,255,0.3);
    .modalContainer {
      position: absolute;
      display: flex;
      max-height: 85vh;
      width: 80%;
      background-color: ${backgroundColor};
      color: ${textColor};
      left: calc(10% - 10px);
      top: 40px;
      border-radius: 10px;
      padding: 10px;
    }
    &.show {
      opacity: 1
    }
  `
  React.useEffect(() => {
    if(show) {
      setShowModal(true)
      setTimeout(()=> {
        setModalCName('show')
      },10)
    } else {
      setModalCName('')
      setTimeout(() => {
        setShowModal(false)
      }, 300)
    }
  },[show])

  function handleClickOutside(e:MouseEvent ) {
    if (e.target === e.currentTarget) {
      close(false)
    }
  }

  return (
    <ModalPortal>
      {showModal && (
        <div className={`${modalCName} ${modalStyle}`} onClick={handleClickOutside}>
          <div className='modalContainer'>
            {children}
          </div>
        </div>
      )}
    </ModalPortal>
  )
}

function ModalPortal({ children }: ModalPortalProps):React.ReactElement<ModalPortalProps> {
  const root = document.getElementsByTagName('body')[0]
  return ReactDOM.createPortal(
    children,
    root
  )
}

export default Modal