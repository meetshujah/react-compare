import React from "react";
import { useRecoilValue } from "recoil";
import { productState } from "../../productRecoil";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useRecoilValue(productState);

  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
