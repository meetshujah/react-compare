import React from "react";
import { useRecoilState } from "recoil";
import { compareProductState } from "../../productRecoil";

const CompareTags = () => {
  const [compareProducts, setCompareProducts] = useRecoilState(
    compareProductState
  );

  const removeCompareProduct = (productId) => {
    const removed_products = compareProducts.filter(
      (product) => product.id != productId
    );
    setCompareProducts(removed_products);
  };
  return (
    <div className="my-4">
      {compareProducts.map((product) => (
        <span className="tag is-medium is-success mr-2" key={product.id}>
          {product.brand}
          <button
            className="delete is-small"
            onClick={() => removeCompareProduct(product.id)}
          ></button>
        </span>
      ))}

      {compareProducts.length == 1 ? (
        <div className="mt-4 notification is-danger">
          please select more than 1 product for compare.
        </div>
      ) : null}
    </div>
  );
};

export default CompareTags;
