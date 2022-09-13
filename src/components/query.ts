import { gql } from "@apollo/client";

export const GET_ANIME_LIST =  gql`
    query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (search: $search) {
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