import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';

import beersReducer from './slices/beerSlice';

const rootReducer = combineReducers({
  beers: beersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
