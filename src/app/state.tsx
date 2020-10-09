import { atom } from 'recoil';
import { searchFilterItems, tracks } from './data';

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
  default: tracks[0],
});


// playlists
export const wishListState = atom({
  key: 'wishListState',
  default: tracks.slice(0, 8),
});

export const playListState = atom({
  key: 'playListState',
  default: tracks.slice(0, 20),
});

export const upNextListState = atom({
  key: 'upNextListState',
  default: tracks.slice(1, 15),
});

export const historyListState = atom({
  key: 'historyListState',
  default: tracks.slice(0, 25),
});