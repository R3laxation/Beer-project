import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { api, BeersType } from '../../dal/api';

export const fetchBeers = createAsyncThunk(
  'beers/fetchBeers',
  async (param: { currentPage: number; itemsPerPage: number; searchValue: string }) => {
    const { currentPage, itemsPerPage, searchValue } = param;
    const { data } = await api.fetchBeers(currentPage, itemsPerPage, searchValue);
    return data;
  },
);

const beersSlice = createSlice({
  name: 'beers',
  initialState: {
    beers: [],
    beer: [],
    currentPage: 1,
    itemsPerPage: 8,
  } as BeersStateType,
  reducers: {
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.currentPage = action.payload.currentPage;
    },
    fetchCurrentBeer(state, action: PayloadAction<{ id: number }>) {
      state.beer = state.beers.filter(item => item.id === action.payload.id);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBeers.fulfilled, (state, action) => {
      state.beers = action.payload;
    });
  },
});

type BeersStateType = {
  beers: BeersType[];
  beer: BeersType[];
  currentPage: number;
  itemsPerPage: number;
};

export const { setCurrentPage, fetchCurrentBeer } = beersSlice.actions;

export default beersSlice.reducer;
