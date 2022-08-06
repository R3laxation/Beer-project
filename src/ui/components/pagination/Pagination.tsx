import React from 'react';

import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import { selectBeers } from '../../../bll/slices/selector';

import s from './Pagination.module.scss';

export const Pagination = ({ onChangePage, itemsPerPage }: PaginationPropsType) => {
  const beers = useSelector(selectBeers);

  // const totalPage = beers / itemsPerPage;

  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={itemsPerPage}
      pageCount={41}
      previousLabel="<"
      renderOnZeroPageCount={() => null}
    />
  );
};

type PaginationPropsType = {
  onChangePage: (page: number) => void;
  itemsPerPage: number;
};
