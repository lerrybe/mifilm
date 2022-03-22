const initialState = {

};

const reducers = {
  login(state, { payload: { inputUsername } }) {
    return {
      ...state,
      inputUsername,
    };
  },

  setDailyBoxOfficeList(state, { payload: { dailyBoxOfficeList } }) {
    return {
      ...state,
      dailyBoxOfficeList,
    };
  },

  setDetailMovieInfo(state, { payload: { movieInfo } }) {
    return {
      ...state,
      movieInfo,
    };
  },

  setSearchedMovieList(state, { payload: { items } }) {
    return {
      ...state,
      items,
    };
  },

  setMusicList(state, { payload: { musicList } }) {
    return {
      ...state,
      musicList,
    };
  },

  setSelectedMusic(state, { payload: { selectedMusic } }) {
    return {
      ...state,
      selectedMusic,
    };
  },

  setLikedMusicList(state, { payload: { storedLikedMusicList } }) {
    return {
      ...state,
      storedLikedMusicList,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
