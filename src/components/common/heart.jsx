import React from "react";

const Heart = props => {
  let classes = "fa fa-";

  return (
    <i
      className={props.isLiked ? (classes += "heart") : (classes += "heart-o")}
      onClick={() => props.onLike(props.id)}
    />
  );
};

export default Heart;
