import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import s from './Pagination.module.css';

export default function PaginatedItems({
  itemsPerPage,
  newPageNumber,
  totalDocs,
}) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalDocs / itemsPerPage));
  }, [totalDocs, itemsPerPage]);

  const handlePageClick = event => {
    const newOffset = event.selected + 1;
    newPageNumber(newOffset);
  };

  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
}
