import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IAppState } from './types';

export const initialState: IAppState = {
  language: 'en',
  currency: 'USD',
  isDrawerOpen: false,
};

const applicationsSlice = createSlice({
  // @ts-ignore: Unreachable code error
  name: 'appState',
  initialState,
  reducers: {
    setDrawerOpen(state) {
      state.isDrawerOpen = true;
    },
    setDrawerClose(state) {
      state.isDrawerOpen = false;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    resetState(state) {
      state = initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = applicationsSlice;
