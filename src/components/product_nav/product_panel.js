import url from "../../config.js";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import SearchBar from "./search_bar.js";
import Header from "./header.js";
import ProductList from "./product_list.js";

const ProductPanel = () => {
  const { data } = useFetch(`${url}/products`);
  // get products and count the number of tickets
  // with that id and open/closed status
  return (
    <div className="product-panel">
      {data ? (
        <div className="product-wrapper">
          <SearchBar />
          <Header />
          <ProductList data={data} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductPanel;
