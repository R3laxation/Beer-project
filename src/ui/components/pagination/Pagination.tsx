import React from 'react';

import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

export const Pagination = ({ onChangePage, itemsPerPage }: PaginationPropsType) => (
  <ReactPaginate
    className={s.pagination}
    breakLabel="..."
    nextLabel=">"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={itemsPerPage}
    pageCount={82}
    previousLabel="<"
    renderOnZeroPageCount={() => null}
  />
);

type PaginationPropsType = {
  onChangePage: (page: number) => void;
  itemsPerPage: number;
};
