import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

interface AnimeInterface {
  page: number;
  perPage: number;
}

interface Anime {
  id: number;
  title: { romaji: string }
}
interface AnimeData {
  rocketInventory: Anime[];
}

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
        media (search: "boku") {
          id
          title {
            romaji
          }
        }
      }
    }
    `

function App() {
  const { loading, data } = useQuery<AnimeData, AnimeInterface>(
    GET_ANIME_LIST,
    { variables: { page: 1, perPage: 3 } }
  );
  console.log(data)
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
    </div>
  );
}

export default App;
