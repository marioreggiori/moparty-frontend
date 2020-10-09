import { atom } from 'recoil';
import { searchFilterItems } from './data';

// search
export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const searchFilterState = atom({
  key: 'searchFilterState',
  default: Object.assign({}, ...searchFilterItems.map(item => ({ [item.key]: true }))),
});

export const searchResultState = atom({
  key: 'searchResultState',
  default: {},
});

export const searchIsLoadingState = atom({
  key: 'searchIsLoading',
  default: false,
});


// current song
export const currentSongState = atom({
  key: 'currentSongState',
  default: null,
});


// playlists
export const wishListState = atom({
  key: 'wishListState',
  default: [],
});

export const playListState = atom({
  key: 'playListState',
  default: [],
});

export const upNextListState = atom({
  key: 'upNextListState',
  default: [],
});

export const historyListState = atom({
  key: 'historyListState',
  default: [],
});