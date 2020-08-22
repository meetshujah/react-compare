import React from "react";
import ProductImage from "./ProductImage";
import ProductColors from "./ProductColors";
import { compareProductState } from "../../productRecoil";
import { useRecoilState } from "recoil";
import { animateScroll as scroll } from "react-scroll";

const ProductCard = (props) => {
  const { product } = props;
  const [compareProducts, setCompareProducts] = useRecoilState(
    compareProductState
  );
  const addToCompareProducts = (product) => {
    let isExists = compareProducts.find(
      (productItem) => productItem.id == product.id
    );
    if (!isExists) {
      setCompareProducts([product, ...compareProducts]);
    }
    scroll.scrollToBottom();
  };
  return (
    <div className="column is-3">
      <div className="product-card card">
        <ProductImage url={product.url} alt={product.brand} />
        <button
          className="button is-warning is-small button-compare"
          onClick={() => addToCompareProducts(product)}
        >
          compare
        </button>
        <div className="card-content">
          <div className="columns">
            <div className="column is-8">
              <h2 className="title is-5">{product.brand}</h2>
            </div>
            <div className="column is-4">
              <h2 className="subtitle is-6">₹ {product.price}</h2>
            </div>
          </div>
          <ProductColors colors={product.colors} />
          <div className="columns">
            <div className="column is-8">
              <div className="tags has-addons">
                <span className="tag is-danger">discount</span>
                <span className="tag is-danger is-light">
                  {product.discount}
                </span>
              </div>
            </div>
            <div className="column is-4 has-text-right">
              ({product.reviews})
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <button className="button is-dark">Add to Cart</button>
            </div>
            <div className="column is-6">
              <button className="button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
