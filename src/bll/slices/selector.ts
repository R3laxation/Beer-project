import { AppRootStateType } from '../store';

export const selectBeers = (state: AppRootStateType) => state.beers.beers;
export const selectCertainBeer = (state: AppRootStateType) => state.beers.beer;
export const selectCurrentPage = (state: AppRootStateType) => state.beers.currentPage;
export const selectPageCount = (state: AppRootStateType) => state.beers.itemsPerPage;
