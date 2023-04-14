import { atom } from 'recoil';

export const billState = atom({
  key: 'billState',
  default: {
    customerName: '',
    billItems: [],
  },
});