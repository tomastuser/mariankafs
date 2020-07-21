import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className='pageItem'>
          {currentPage === 1 ? (
            <span className='pageLink pageLinkDisabled'>&laquo;</span>
          ) : (
            <Link
              className='pageLink'
              onClick={() => paginate(currentPage - 1)}
              to={`/aktuality/strana/${currentPage - 1}`}
            >
              &laquo;
            </Link>
          )}
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className='pageItem'>
            <Link
              onClick={() => paginate(number)}
              to={`/aktuality/strana/${number}`}
              className={
                number === currentPage ? 'pageLink pageLinkActive' : 'pageLink'
              }
            >
              {number}
            </Link>
          </li>
        ))}
        <li class='pageItem'>
          {currentPage === pageNumbers.length ? (
            <span class='pageLink pageLinkDisabled'>&raquo;</span>
          ) : (
            <Link
              className='pageLink'
              onClick={() => paginate(currentPage + 1)}
              to={`/aktuality/strana/${currentPage + 1}`}
            >
              &raquo;
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
