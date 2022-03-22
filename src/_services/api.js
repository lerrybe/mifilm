import axios from 'axios';

const KOFIC_API_KEY = process.env.REACT_APP_KOFIC_API_KEY;
const NAVER_MOVIE_CLIENT_ID = process.env.REACT_APP_NAVER_MOVIE_CLIENT_ID;
const NAVER_MOVIE_CLIENT_SECRET = process.env.REACT_APP_NAVER_MOVIE_CLIENT_SECRET;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY_SECOND;

export async function fetchDailyBoxOfficeList({ date }) {
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    + `?key=${KOFIC_API_KEY}&targetDt=${date}&multiMovieYn=N&repNationCd=F`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchDetailMovieInfo(movie) {
  const url = '/v1/search/movie.json'
    + `?query=${movie}&display=10`;
  const response = await axios.get(url, {
    headers: {
      'X-Naver-Client-Id': NAVER_MOVIE_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_MOVIE_CLIENT_SECRET,
    },
  });
  return response.data;
}

export async function fetchMusic(searchedMovie) {
  const url = '/v3/search';
  const response = await axios.get(url, {
    params: {
      part: 'snippet',
      fields: 'items(id,snippet(title,description,thumbnails))',
      type: 'video',
      maxResults: 3,
      key: YOUTUBE_API_KEY,
      q: searchedMovie,
    },
  });
  const data = response.data.items;
  return data;
}
