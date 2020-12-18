import React from 'react';
import s from "./Pagination.module.css";
import {FaLongArrowAltLeft, FaRegArrowAltCircleLeft, FaLongArrowAltRight, FaRegArrowAltCircleRight} from 'react-icons/fa';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && <>
        <FaRegArrowAltCircleLeft className={s.icons} onClick={() => setPortionNumber(1)}/>
        <FaLongArrowAltLeft className={s.icons} onClick={() => setPortionNumber(portionNumber - 1)}/>
      </>}
      {
        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(page => {
            return <span onClick={() => {
              onPageChanged(page)
            }} className={`${currentPage === page && s.selectedPage} ${s.pageSelector}`
            }> {page} </span>
          })
      }
      {portionNumber < portionCount &&
      <>
        <FaLongArrowAltRight className={s.icons} onClick={() => setPortionNumber(portionNumber + 1)}/>
        <FaRegArrowAltCircleRight className={s.icons} onClick={() => setPortionNumber(portionCount)}/>
      </>
      }
    </div>
  )
};

export default Paginator;