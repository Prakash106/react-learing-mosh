import React from "react";

const SearchBox = ({ value, handelChange }) => {
  return (
    <input
      className="form-control my-3"
      type="search"
      value={value}
      onChange={e => handelChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
