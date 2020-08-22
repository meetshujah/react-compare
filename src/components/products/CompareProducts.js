import React from "react";
import { useRecoilValue } from "recoil";
import ProductImage from "./ProductImage";
import { compareProductState } from "../../productRecoil";
import Ratings from "../elements/Ratings";
import ProductColors from "./ProductColors";

const CompareProducts = () => {
  const compareProducts = useRecoilValue(compareProductState);

  if (compareProducts.length < 2) {
    return null;
  }
  return (
    <div className="card px-5 py-5 table-container">
      <div className="columns">
        <div className="column is-3"></div>
        {compareProducts.map((product) => (
          <div className="column is-3" key={product.id}>
            <ProductImage url={product.url} alt={product.brand} />
            <button className="button is-dark is-fullwidth my-4">
              add to cart
            </button>
          </div>
        ))}
      </div>
      <div className="columns">
        <div className="column is-3">
          <p className="title is-6">brand</p>
          <p className="title is-6">ratings</p>
          <p className="title is-6">reviews</p>
          <p className="title is-6">price</p>
          <p className="title is-6">discount</p>
          <p className="title is-6">colors</p>
        </div>
        {compareProducts.map((product, i) => (
          <div className="column is-3 has-text-centered" key={product.id}>
            <p className="title is-6">{product.brand}</p>
            <p className="title is-6">
              <Ratings number={product.ratings} />
            </p>
            <p className="title is-6">({product.reviews})</p>
            <p className="title is-6">₹ {product.price}</p>
            <p className="title is-6">{product.discount} OFF</p>

            <ProductColors
              colors={product.colors}
              styles={{ justifyContent: "center" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareProducts;
