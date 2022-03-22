import styled from '@emotion/styled';

import { useParams } from 'react-router-dom';

import { saveItem } from '../_services/storage';

import NavigationBar from '../components/NavigationBar';
import PlayDevice from '../components/PlayDevice';
import ShowDetailFilmContainer from '../containers/ShowDetailFilmContainer';

const ShowDetailFilmWrapDiv = styled.div`
  display: flex;
`;

export default function ShowDetailFilmPage({ params }) {
  const { movie } = params || useParams();
  saveItem('movie', movie.replace(/ /gi, ''));

  return (
    <ShowDetailFilmWrapDiv>
      <NavigationBar />
      <ShowDetailFilmContainer />
      <PlayDevice />
    </ShowDetailFilmWrapDiv>
  );
}
