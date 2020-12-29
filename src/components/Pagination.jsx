import React from 'react';

export const Pagination = ({ itemsPerPage, totalItems, paginate,activePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={activePage ? 'active' : ''}>
            <span onClick={() => paginate(number)} >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};