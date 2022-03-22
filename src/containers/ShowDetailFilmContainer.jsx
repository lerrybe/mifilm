import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadDetailMovieInfo, loadMusicList, setSelectedMusic } from '../_actions/actions';
import { loadItem } from '../_services/storage';
import { get } from '../utils/utils';

import PlayItem from '../components/PlayItem';

import boxoffice from '../img/boxoffice.svg';

import SubIconImg from '../styles/SubIconImg';
import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import { ContentsSubTitleDiv } from '../styles/ContentsTitleDiv';
import {
  AnnounceDiv,
  ShowTitleWrapDiv,
  ShowTitleDiv,
  ShowInfoDiv,
  ShowPosterDiv,
  ShowPosterImg,
  ShowMovieInfoDiv,
  ShowMovieFieldDiv,
  PlayItems,
} from '../styles/ShowDetailFilm';

export default function ShowDetailFilmContainer() {
  const dispatch = useDispatch();
  const movie = loadItem('movie');

  dispatch(loadDetailMovieInfo(movie));
  const movieInfo = useSelector(get('movieInfo'));

  useEffect(() => {
    dispatch(loadMusicList(movie));
  }, []);

  const musicList = useSelector(get('musicList'));

  const handleClickSelectedMusic = (item) => {
    dispatch(setSelectedMusic(item));
  };

  if (!movieInfo || !musicList) {
    return (
      <ContainerWrapDiv>
        <AnnounceDiv>⏰ Loading...⏰</AnnounceDiv>
      </ContainerWrapDiv>
    );
  }

  return (
    <ContainerWrapDiv>
      <ShowTitleWrapDiv>
        <SubIconImg src={boxoffice} alt="boxoffice" />
        <ShowTitleDiv>{movie}</ShowTitleDiv>
      </ShowTitleWrapDiv>

      <div>
        <ContentsSubTitleDiv>영화 정보</ContentsSubTitleDiv>
        <ShowInfoDiv>
          <ShowPosterDiv>
            <ShowPosterImg src={movieInfo.image || '#'} />
          </ShowPosterDiv>
          <ShowMovieInfoDiv>
            <ShowMovieFieldDiv>
              {`🔑 ${movieInfo.title.replace('<b>', '').replace('</b>', '')} (${movieInfo.pubDate})`}
            </ShowMovieFieldDiv>
            <ShowMovieFieldDiv>
              {`🔑 감독: ${movieInfo.director.replaceAll('|', ' ')}`}
            </ShowMovieFieldDiv>
            <ShowMovieFieldDiv>
              {`🔑 배우: ${movieInfo.actor.replace('<b>', '').replace('</b>', '').replaceAll('|', ' ')}`}
            </ShowMovieFieldDiv>
            <ShowMovieFieldDiv>
              {`🔑 평점: ${movieInfo.userRating}`}
            </ShowMovieFieldDiv>
          </ShowMovieInfoDiv>
        </ShowInfoDiv>
      </div>

      <PlayItems>
        <ContentsSubTitleDiv>플레이리스트</ContentsSubTitleDiv>
        {musicList.map((item) => (
          <PlayItem
            key={item.snippet.title}
            title={item.snippet.title}
            image={item.snippet.thumbnails.default.url}
            handleClickSelectedMusic={() => handleClickSelectedMusic(item)}
          />
        ))}
      </PlayItems>
    </ContainerWrapDiv>
  );
}
