import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { IconSize, iconList, iconSizes } from '../../Icon/Icon';
import { PageSizeOption } from './PageSizeOption';
import './Pagination.scss';

const defaultButton = props => <button {...props}>{props.children}</button>;

export const Pagination = (props) => {
  const filterPages = (visiblePages, totalPages) => visiblePages.filter(page => page <= totalPages);
  const getVisiblePages = (page, total) => {
    if (!total) return [];
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    }
    if (page % 5 >= 0 && page > 4 && page + 2 < total) {
      return [1, page - 1, page, page + 1, total];
    }
    if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [1, 2, 3, 4, 5, total];
  };
  const [visiblePages, setVisiblePages] = useState(
    getVisiblePages(null, props.pages),
  );

  useEffect(() => {
    setVisiblePages(getVisiblePages(null, props.pages));
  }, [props.pages]);

  const changePage = (page) => {
    const activePage = props.page + 1;

    if (page === activePage) {
      return;
    }

    const visiblePagesUpdate = getVisiblePages(page, props.pages);

    setVisiblePages(filterPages(visiblePagesUpdate, props.pages));
    props.onPageChange(page - 1);
  };

  useEffect(() => {
    changePage(props.page + 1);
  }, [props]);

  const { PageButtonComponent = defaultButton } = props;
  const activePage = props.page + 1;

  const onChangePageSize = (event) => {
    props.onPageSizeChange(event.target.value);
    props.calculateTotalPage(event.target.value);
  };

  const backToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="table__pagination-wrapper">
      <PageSizeOption handleChangeSize={onChangePageSize} pageSizeOptions={props.pageSizeOptions} />
      <div className="table__pagination">
        <div className="table__prev-page-wrapper">
          <PageButtonComponent
            className="table__page-button"
            onClick={() => {
              if (activePage === 1) return;
              changePage(activePage - 1);
            }}
            disabled={activePage === 1}
          >
            {/* {<IconSize
              icon={iconList.arrowLeftSign}
              color="#9b9b9b"
              size={iconSizes.LARGE}
            />} */}
          </PageButtonComponent>
        </div>
        <div className="table__visible-pages-wrapper">
          {visiblePages.map((page, index, array) => (
            <PageButtonComponent
              key={page}
              className={
              activePage === page
                ? 'table__page-button table__page-button--active'
                : 'table__page-button'
            }
              onClick={() => changePage(page)}
            >
              {array[index - 1] + 2 < page ? `... ${page}` : page}
            </PageButtonComponent>
          ))}
        </div>
        <div className="table__next-page-wrapper">
          <PageButtonComponent
            className="table__page-button"
            onClick={() => {
              if (activePage === props.pages) return;
              changePage(activePage + 1);
            }}
            disabled={activePage === props.pages}
          >
            {/* {<IconSize
              icon={iconList.arrowRightSign}
              color="#9b9b9b"
              size={iconSizes.LARGE}
            />} */}
          </PageButtonComponent>
        </div>
      </div>
      <div className="table__back-to-top" onClick={backToTop} onKeyPress={null} role="button" tabIndex="0">
        <span> Back to top </span>
        {/* <IconSize
          icon={iconList.arrowUpSign}
          color="#000000"
          size={iconSizes.MEDIUM}
        /> */}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  PageButtonComponent: PropTypes.any,
  onPageChange: PropTypes.func,
};
