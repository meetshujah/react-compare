import React from "react";
import Products from "../products/Products";
import CompareTags from "../products/CompareTags";
import CompareProducts from "../products/CompareProducts";

const Home = () => {
  return (
    <div className="section">
      <div className="container">
        <Products />
        <CompareTags />
        <CompareProducts />
      </div>
    </div>
  );
};

export default Home;
