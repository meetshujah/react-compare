import React from "react";

const ProductColors = (props) => {
  const { colors, styles } = props;
  return (
    <div className="columns" style={styles}>
      {colors.map((color, index) => (
        <div className="column is-2" key={index}>
          <div
            className="product-colors"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProductColors;
