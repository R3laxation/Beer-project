import React, { ChangeEvent, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { fetchBeers, setCurrentPage } from '../../bll/slices/beerSlice';
import {
  selectBeers,
  selectCurrentPage,
  selectPageCount,
} from '../../bll/slices/selector';
import { useAppDispatch } from '../../bll/store';
import { useDebounce } from '../../common/functionsHelpers/useDebounce';
import { BeersBlock } from '../components/beersBlock/BeersBlock';
import '../../scss/app.scss';
import { Pagination } from '../components/pagination/Pagination';

export const Main = () => {
  const beers = useSelector(selectBeers);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectPageCount);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const delayedValue = useDebounce(value, 1500);
  const mappedBeers = beers
    .filter(item => item.name.toLocaleLowerCase().includes(delayedValue.toLowerCase()))
    .map(b => <BeersBlock key={b.id} {...b} />);

  useEffect(() => {
    dispatch(fetchBeers({ currentPage, itemsPerPage }));
  }, [currentPage]);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }));
  };
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={onChangeValue} value={value} />
      {mappedBeers}
      <Pagination onChangePage={onChangePage} itemsPerPage={itemsPerPage} />
    </div>
  );
};
