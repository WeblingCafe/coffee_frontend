import { atom } from 'recoil';

export const loginStateAtom = atom({
  key: 'loginState',
  default: false,
});

export const getHeadersAtom = atom({
  key: 'headers',
  default: '',
});
