import {
  fetchDailyBoxOfficeList,
  fetchDetailMovieInfo,
  fetchMusic,
} from '../_services/api';

import { saveItem } from '../_services/storage';

export function login(inputUsername) {
  saveItem('name', inputUsername);
  return {
    type: 'login',
    payload: { inputUsername },
  };
}

export function setDailyBoxOfficeList(dailyBoxOfficeList) {
  return {
    type: 'setDailyBoxOfficeList',
    payload: { dailyBoxOfficeList },
  };
}

export function setDetailMovieInfo(movieInfo) {
  return {
    type: 'setDetailMovieInfo',
    payload: { movieInfo },
  };
}

export function setSearchedMovieList(items) {
  return {
    type: 'setSearchedMovieList',
    payload: { items },
  };
}

export function setMusicList(musicList) {
  return {
    type: 'setMusicList',
    payload: { musicList },
  };
}

export function setSelectedMusic(selectedMusic) {
  return {
    type: 'setSelectedMusic',
    payload: { selectedMusic },
  };
}

export function setLikedMusicList(storedLikedMusicList) {
  return {
    type: 'setLikedMusicList',
    payload: { storedLikedMusicList },
  };
}

export function loadDailyBoxOfficeList({ date, nation }) {
  return async (dispatch) => {
    const data = await fetchDailyBoxOfficeList({ date, nation });
    const { dailyBoxOfficeList } = data.boxOfficeResult;
    dispatch(setDailyBoxOfficeList(dailyBoxOfficeList));
  };
}

export function loadDetailMovieInfo(movie) {
  return async (dispatch) => {
    const data = await fetchDetailMovieInfo(movie);
    const { items } = data;
    const result = items.filter((item) => item.title.replace('<b>', '').replace('</b>', '').replaceAll(' ', '') === movie);
    const movieInfo = result[0];
    dispatch(setDetailMovieInfo(movieInfo));
  };
}

export function loadSearchedMovieList(movie) {
  return async (dispatch) => {
    const data = await fetchDetailMovieInfo(movie);
    const { items } = data;
    dispatch(setSearchedMovieList(items));
  };
}

export function loadMusicList(movie) {
  return async (dispatch) => {
    const musicList = await fetchMusic(`영화 ${movie} OST song soundtrack`);
    dispatch(setMusicList(musicList));
  };
}
