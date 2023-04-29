import { useState } from 'react';

function usePaginator(itemsPerPage: number, itemList: any) {
  const ITEMS_PER_PAGE = itemsPerPage;
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = page * ITEMS_PER_PAGE;
  const totalPages = Math.ceil(itemList.length / ITEMS_PER_PAGE);
  const paginatedList = itemList.slice(startIndex, endIndex);
  const itensDe = (page - 1) * ITEMS_PER_PAGE + 1;
  const itensPara =
    paginatedList.length < ITEMS_PER_PAGE
      ? paginatedList.length + (page - 1) * ITEMS_PER_PAGE
      : page * ITEMS_PER_PAGE;

  const previousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return { previousPage, nextPage, paginatedList, itensDe, itensPara };
}

export default usePaginator;
