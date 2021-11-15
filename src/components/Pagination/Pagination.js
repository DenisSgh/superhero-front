import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import s from './Pagination.module.css';

export default function PaginatedItems({ newPageNumber, totalDocs }) {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalDocs / 5));
  }, [totalDocs, pageCount]);

  const handlePageClick = event => {
    const newOffset = event.selected + 1;
    newPageNumber(newOffset);
  };

  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
