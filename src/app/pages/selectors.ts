import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.appState || initialState;

export const select = () => createSelector([selectDomain], state => state);

export const selectAppState = createSelector(
  [selectDomain],
  appState => appState,
);
// eslint-disable-next-line
export default () => useSelector(select());
