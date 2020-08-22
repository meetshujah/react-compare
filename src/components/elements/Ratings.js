import React from "react";

const Ratings = (props) => {
  const { number } = props;
  return new Array(number).fill(<span className="material-icons">star</span>);
};

export default Ratings;
