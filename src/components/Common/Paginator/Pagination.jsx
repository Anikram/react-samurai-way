import React from 'react';
import s from "./Pagination.module.css";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {
        pages.map(page => {
          return <span onClick={() => {
            onPageChanged(page)}} className={`${currentPage === page && s.selectedPage} ${s.pageSelector}`
            }> {page} </span>
        })
      }
    </div>
  )
}

export default Pagination;