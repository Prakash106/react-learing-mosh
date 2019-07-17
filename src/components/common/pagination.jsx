import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Pagination = props => {
  const { totalCount, pageSize, currentPage, onPageChange } = props;
  const pageNumber = Math.ceil(totalCount / pageSize);
  const pages = _.range(1, pageNumber + 1);

  return (
    pages.length !== 1 &&
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li className={currentPage === page ? "page-item active": "page-item"} key={page}>
            <a className="page-link link" onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
