import React from "react";

const ProductImage = (props) => {
  const { url, alt } = props;
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={url} alt={alt} />
      </figure>
    </div>
  );
};

export default ProductImage;
