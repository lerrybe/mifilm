import styled from '@emotion/styled';

import NavigationBar from '../components/NavigationBar';
import SearchFilmContainer from '../containers/SearchFilmContainer';
import PlayDevice from '../components/PlayDevice';

const SearchFilmWrapDiv = styled.div`
  display: flex;
`;

export default function SearchFilmPage() {
  return (
    <SearchFilmWrapDiv>
      <NavigationBar />
      <SearchFilmContainer />
      <PlayDevice />
    </SearchFilmWrapDiv>
  );
}
