import React from "react";

const ListGroup = props => {
  return (
    <ul className="list-group">
      {props.genres.map(genre => (
        <li
          key={genre}
          className={
            props.selectedGenre === genre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.handelItemSelect(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
