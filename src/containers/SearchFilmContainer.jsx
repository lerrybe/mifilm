/* eslint-disable no-alert */

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadSearchedMovieList } from '../_actions/actions';

import { get } from '../utils/utils';

import search from '../img/search.svg';

import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import { ContentsSubTitleDiv, ContentsTitleDiv, ContentsTitleWrapDiv } from '../styles/ContentsTitleDiv';
import SubIconImg from '../styles/SubIconImg';
import {
  SearchInputWrapDiv,
  SearchInput,
  MiddleButton,
  MovieItem,
  StyledLink,
} from '../styles/SearchFilm';

export default function SearchFilmContainer() {
  const dispatch = useDispatch();
  const movieItems = useSelector(get('items'));
  const [movieName, setMovieName] = useState('');

  const handleChangeMovieName = (event) => {
    setMovieName(event.target.value);
  };

  const handleSubmit = () => {
    if (!movieName) {
      alert('영화 제목을 입력해주세요.');
      return;
    }
    dispatch(loadSearchedMovieList(movieName));
  };

  return (
    <ContainerWrapDiv>
      <ContentsTitleWrapDiv>
        <SubIconImg src={search} alt="search" />
        <ContentsTitleDiv>Search Movie</ContentsTitleDiv>
      </ContentsTitleWrapDiv>

      <div>
        <ContentsSubTitleDiv>찾고 싶은 영화를 검색하세요!</ContentsSubTitleDiv>
        <SearchInputWrapDiv>
          <SearchInput
            type="text"
            name="search"
            placeholder="찾고 싶은 영화는?"
            defaultValue={movieName}
            onChange={handleChangeMovieName}
          />

          <MiddleButton
            type="submit"
            onClick={handleSubmit}
          >
            입력
          </MiddleButton>
        </SearchInputWrapDiv>
      </div>

      {movieItems && movieItems.length !== 0 ? (
        <ul>
          {movieItems.map((movie) => (
            <MovieItem key={movie.userRating}>
              <StyledLink to={`/show/${encodeURI(movie.title.replace(/ /gi, '').replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('&amp;', ''))}`}>
                {` * ${movie.title.replaceAll('<b>', '').replaceAll('</b>', '').replaceAll('&amp;', '')} (${movie.pubDate})`}
              </StyledLink>
            </MovieItem>
          ))}
        </ul>
      ) : (
        <ul>
          <MovieItem>
            검색 결과가 없습니다. 검색어를 입력해주세요!
          </MovieItem>
        </ul>
      )}
    </ContainerWrapDiv>
  );
}
