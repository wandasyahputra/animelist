import React from 'react'
import { useQuery } from '@apollo/client'
import { css } from '@emotion/css'
import Input from '../components/input/input'
import ItemThumbnail from '../components/itemThumbnail/itemThumbnail'
import Modal from '../components/modal/modal'
import Pagination from '../components/pagination/pagination'
import { GET_ANIME_LIST } from '../components/query'
import { debounce } from 'lodash'

interface ModalCreateProps {
  show: boolean,
  close: (e: boolean) => void
}
interface AnimeOption {
  page: number;
  perPage: number;
  search?: string;
}

interface Anime {
  Page: {
    media: [{
      coverImage: {
        large: string;
      }
      id: number;
      title: {
        romaji: string;
      }
      episodes: number;
    }]
    pageInfo: {
      lastPage: number;
    }
  }
}

function ModalCreate({
  show,
  close
}:ModalCreateProps):React.ReactElement<ModalCreateProps> {
  const [title, setTitle] = React.useState<string>('')
  const [search, setSearch] = React.useState<string>('')
  const [page, setPage] = React.useState(1)
  
  const perPage = 10;
  const modalCreateStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
    .modal-title {
      margin-bottom: 10px;
    }
    .anime-container {
      height: calc(85vh - 100px);
      overflow: scroll;
      text-align: center;
    }
  `

  const { fetchMore, loading, data } = useQuery<Anime, AnimeOption> (
    GET_ANIME_LIST,
    { variables: { page: page, perPage, search } }
  );
  
  async function changePage(n: number) {
    setPage(n)
    await fetchMore({variables: { page: n, perPage, search}})
  }

  function handleTitle (e:string) {
    setTitle(e)
  }
  function handleSearch (e:string) {
    setSearch(e)
    debounce(() => fetchMore({variables: { page, perPage, search: search}}), 500)
  }
  return (
    <Modal
      show={show}
      close={close}
    >
      <div className={modalCreateStyle}>
        <div className='modal-title'>
          Add Anime Collection
        </div>
        <Input
          value={title}
          onChange={handleTitle}
          placeholder="Collection Title"
        />
        <Input
          value={search}
          onChange={handleSearch}
          placeholder="Search Anime"
        />
        <div className='anime-container'>
        {loading && (
            <div>loading</div>
          )}
          {
            data && data.Page.media.map(item => (
              <ItemThumbnail
                key={item.id}
                cover={item.coverImage.large}
                title={item.title.romaji}
                id={item.id}
                mode="anime"
                episode={item.episodes}
              />
            ))
          }
          <Pagination
            currentPage={page}
            pageLength={data ? data.Page.pageInfo.lastPage : 0}
            onChange={changePage}
          />
        </div>
      </div>
    </Modal>

  )
}
export default ModalCreate