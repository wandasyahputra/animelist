import React from 'react'
import { useQuery, gql } from '@apollo/client';
import ItemThumbnail from '../components/itemThumbnail/itemThumbnail';

const GET_ANIME_LIST =  gql`
    query ($page: Int, $perPage: Int) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media {
          id
          title {
            romaji
          }
          episodes
          coverImage {
            medium
            large
            color
          }
        }
      }
    }
    `

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
  }
}

function AnimeList() {
  const { data } = useQuery<Anime, AnimeOption> (
    GET_ANIME_LIST,
    { variables: { page: 1, perPage: 10 } }
  );
  console.log(data)
  return (
    <div>
      {
        data && data.Page.media.map(item => (
          <ItemThumbnail
            cover={item.coverImage.large}
            title={item.title.romaji}
            id={item.id}
            episode={item.episodes}
          />
        )
        )
      }
    </div>
  )

}

export default AnimeList