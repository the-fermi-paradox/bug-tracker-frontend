import url from "../../../config.js";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import SearchBar from "./search_bar.js";
import Header from "./header.js";

const ProductPanel = () => {
  const { data } = useFetch(`${url}/products`);
  return (
    <div>
      {data ? (
        <div className="product-wrapper">
          <SearchBar />
          <Header />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductPanel;
