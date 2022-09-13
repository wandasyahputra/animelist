import React from 'react'
import Modal from '../components/modal/modal'

interface ModalCreateProps {
  show: boolean,
  close: (e: boolean) => void
}

function ModalCreate({
  show,
  close
}:ModalCreateProps):React.ReactElement<ModalCreateProps> {
  return (
    <Modal
      show={show}
      close={close}
    >
      <input />
    </Modal>

  )
}
export default ModalCreate