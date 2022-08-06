import React, { ChangeEvent, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { fetchBeers, setCurrentPage } from '../../bll/slices/beerSlice';
import {
  selectBeers,
  selectCurrentPage,
  selectItemsPerPage,
} from '../../bll/slices/selector';
import { useAppDispatch } from '../../bll/store';
import { useDebounce } from '../../common/functionsHelpers/useDebounce';
import { BeersBlock } from '../components/beersBlock/BeersBlock';
import '../../scss/app.scss';
import { Pagination } from '../components/pagination/Pagination';
import { Sidebar } from '../components/sidebar/Sidebar';

import s from './Main.module.scss';

export const Main = () => {
  const beers = useSelector(selectBeers);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const delayedValue = useDebounce(inputValue, 1500);
  const mappedBeers = beers.map(b => <BeersBlock key={b.id} {...b} />);

  useEffect(() => {
    dispatch(fetchBeers({ currentPage, itemsPerPage, searchValue: delayedValue }));
  }, [currentPage, delayedValue]);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }));
  };
  const onChangeValue = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <div className={s.container}>
      <div className={s.mainPage}>
        <Sidebar inputValue={inputValue} onChangeValue={onChangeValue} />
        <div className={s.beerBlocks}>{mappedBeers}</div>
      </div>
      <Pagination onChangePage={onChangePage} itemsPerPage={itemsPerPage} />
    </div>
  );
};
