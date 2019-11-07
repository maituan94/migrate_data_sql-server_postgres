import React, { useState, useEffect } from 'react';
import ReactTable, {} from 'react-table';
import PropTypes from 'prop-types';
import { Pagination } from './Pagination/Pagination';
import { PAGE_SIZE } from '../../configs/constant';
import './table.scss';

export const Table = ({
  data, total, columns, SubComponent, striped, noDataText, expanded,
  className, onPagingFn, defaultPageSize = PAGE_SIZE, showPagination = true, ...rest
}) => {
  let classes = className || 'xo-rt-table';
  classes += ` ${striped ? '-striped' : ''}`;
  const [pages, setPages] = useState(0);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const calculateTotalPage = (pageSizeChange) => {
    setPageSize(pageSizeChange);
  };

  useEffect(() => {
    if (total) {
      setPages(Math.ceil(total / pageSize));
    } else {
      setPages(0);
    }
  }, [total, pageSize]);
  return (
    <ReactTable
      PaginationComponent={Pagination}
      calculateTotalPage={calculateTotalPage}
      onFetchData={onPagingFn}
      expanded={expanded}
      showPagination={showPagination}
      pageSizeOptions={[10, 25, 50, 100]}
      noDataText={noDataText}
      data={data}
      columns={columns}
      pages={pages}
      pageSize={pageSize}
      SubComponent={SubComponent}
      sortable={false}
      resizable={false}
      filterable={false}
      className={classes}
      manual
      {...rest}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.any,
  SubComponent: PropTypes.any,
  striped: PropTypes.bool,
  noDataText: PropTypes.string,
  loadData: PropTypes.func,
  pageSize: PropTypes.number,
};

Table.defaultValue = {
  data: [],
  columns: [],
  striped: false,
  noDataText: '',
  showPagination: false,
};

export default Table;
