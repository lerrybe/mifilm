import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

// styles
import { Reset } from 'styled-reset';
import Container from './styles/Container';
import './styles/css/set.css';

// Components
import BoxOfficePage from './pages/BoxOfficePage';
import MainPage from './pages/MainPage';
import MyOstPage from './pages/MyOstPage';
import SearchFilmPage from './pages/SearchFilmPage';
import ShowDetailFilmPage from './pages/ShowDetailFilmPage';
import NotFoundPage from './pages/NotFoundPage';
import NoMobile from './pages/NoMobile';

export default function App() {
  return (
    <>
      <Reset />
      <Container className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/boxoffice" element={<BoxOfficePage />} />
          <Route path="/search" element={<SearchFilmPage />} />
          <Route path="/myost" element={<MyOstPage />} />
          <Route path="/show/:movie" element={<ShowDetailFilmPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Container>
      <NoMobile />
    </>
  );
}
