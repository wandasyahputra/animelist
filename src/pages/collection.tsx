import React from 'react'
import ItemThumbnail from '../components/itemThumbnail/itemThumbnail';
import { css } from '@emotion/css'
import Modal from '../components/modal/modal';

interface AnimeOption {
  page: number;
  perPage: number;
}

interface CollectionProp {
  title: string;
  cover: string;
  id: number;
  numberIn: number;
}

function CollectionList() {
  const [data, setData] = React.useState<Array<CollectionProp>>([])
  const [showModal, setShowModal] = React.useState<Boolean>(false)
  
  function getCollection() {
    const collection = localStorage.getItem('collectionList') !== null ?
      localStorage.getItem('collectionList') as string : '[]' 
    setData(JSON.parse(collection))
  }
  function toggleModal() {
    setShowModal((prev) => {
      return !prev
    })
  }

  React.useEffect(() => {
    getCollection()
  },[])

  const collectionListStyle = css`
    text-align: center;
  `
  return (
    <div className={collectionListStyle}>
      <Modal />
      <div onClick={toggleModal}>add</div>
      {data.map(item => 
        <ItemThumbnail
          episode={item.numberIn}
          title={item.title}
          cover={item.cover}
          id={item.id}
          mode="collection"
        />
        )}
    </div>
  )

}

export default CollectionList