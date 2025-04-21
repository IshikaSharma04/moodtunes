import React from 'react';

const Pagination = ({ total, perPage, currentPage, setPage }) => {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      {[...Array(pages).keys()].map(num => (
        <button
          key={num}
          onClick={() => setPage(num + 1)}
          style={{
            backgroundColor: currentPage === num + 1 ? '#0ea5e9' : '#1e40af',
            margin: '0 4px'
          }}
        >
          {num + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
