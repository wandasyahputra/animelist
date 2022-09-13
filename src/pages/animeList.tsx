import React from 'react'
import { useQuery } from '@apollo/client';
import ItemThumbnail from '../components/itemThumbnail/itemThumbnail';
import Pagination from '../components/pagination/pagination';
import { css } from '@emotion/css'
import { GET_ANIME_LIST } from '../components/query';

interface AnimeOption {
  page: number;
  perPage: number;
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

function AnimeList() {
  const perPage = 10;
  const [page, setPage] = React.useState(1)
  const { fetchMore, loading, data } = useQuery<Anime, AnimeOption> (
    GET_ANIME_LIST,
    { variables: { page: page, perPage } }
  );



  async function changePage(n: number) {
    setPage(n)
    await fetchMore({variables: { page: n, perPage}})
  }

  const animeListStyle = css`
    text-align: center;
  `
  return (
    <div className={animeListStyle}>
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
  )

}

export default AnimeList