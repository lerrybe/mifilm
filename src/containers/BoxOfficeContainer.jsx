import { useSelector } from 'react-redux';

import { get } from '../utils/utils';

import SelectMovies from '../components/SelectMovies';

import boxoffice from '../img/boxoffice.svg';

import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import SubIconImg from '../styles/SubIconImg';
import {
  ContentsTitleDiv,
  ContentsTitleWrapDiv,
} from '../styles/ContentsTitleDiv';
import {
  InnerContainerDiv,
  MovieList,
  StyledLink,
} from '../styles/BoxOffice';

export default function BoxOfficeContainer() {
  const dailyBoxOfficeList = useSelector(get('dailyBoxOfficeList'));

  return (
    <ContainerWrapDiv>
      <ContentsTitleWrapDiv>
        <SubIconImg src={boxoffice} alt="boxoffice" />
        <ContentsTitleDiv>Box Office</ContentsTitleDiv>
      </ContentsTitleWrapDiv>

      <SelectMovies />

      <InnerContainerDiv>
        {dailyBoxOfficeList && dailyBoxOfficeList.length !== 0 ? (
          <ol>
            {dailyBoxOfficeList.map((movie) => (
              <MovieList key={movie.rank}>
                <StyledLink to={`/show/${encodeURI(movie.movieNm.replace(/ /gi, ''))}`}>
                  {`${movie.rank}) ${movie.movieNm}`}
                </StyledLink>
              </MovieList>
            ))}
          </ol>
        ) : (
          <ol>
            <MovieList>
              올바른 날짜를 선택해주세요.
            </MovieList>
            <MovieList>
              데이터가 없네요 :O
            </MovieList>
          </ol>
        )}
      </InnerContainerDiv>
    </ContainerWrapDiv>
  );
}
