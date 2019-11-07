import React from 'react';

export const PageSizeOption = (props) => {
  const { handleChangeSize, pageSizeOptions = [10] } = props;
  return (
    <span className="table__page-size-option">
      <span> View </span>
      <select onChange={handleChangeSize}>
        {pageSizeOptions.map((pageSize, index) => <option key={index} value={pageSize}>{pageSize}</option>)}
      </select>
      <span> Entries </span>
    </span>
  );
};
