import url from "../../config.js";
import useFetch from "../../hooks/useFetch.js";
import SearchBar from "./search_bar.js";
import Header from "./header.js";
import ProductList from "./product_list.js";

const ProductPanel = ({ callback }) => {
  const { data } = useFetch(`${url}/products`);
  const data2 = useFetch(`${url}/tickets/sum`).data;
  const sum = data2
    ? {
        ...data2[0],
        id: 0,
        title: "All Products",
      }
    : null;

  // get products and count the number of tickets
  // with that id and open/closed status
  return (
    <div className="product-panel">
      {data && sum ? (
        <div className="product-wrapper">
          <SearchBar />
          <div className="product-list-wrapper">
            <Header />
            <ProductList data={data} sum={sum} callback={callback} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductPanel;
