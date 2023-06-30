import { atom } from 'recoil';

// Recoil atom 생성
export const selectedIndexesState = atom({
  key: 'selectedIndexesState',
  default: [],
});

export default selectedIndexesState;
