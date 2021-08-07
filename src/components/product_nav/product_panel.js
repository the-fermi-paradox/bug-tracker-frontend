import url from "../../../config.js";
import { useState, useEffect } from "React";
import SearchBar from "./search_bar.js";
import Header from "./header.js";

const ProductPanel = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`${url}/products/`)
      .then((payload) => payload.json())
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <SearchBar />
      <Header />
    </div>
  );
};

export default ProductPanel;
