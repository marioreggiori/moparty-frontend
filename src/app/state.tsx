import { atom } from 'recoil';
import { searchFilterItems } from './data';

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const searchFilterState = atom({
  key: 'searchFilterState',
  default: Object.assign({}, ...searchFilterItems.map(item => ({ [item.key]: true }))),
});