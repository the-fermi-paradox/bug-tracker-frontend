import ProductItem from "./product_item.js";

const ProductList = ({ data, callback }) => {
  return (
    <ul className="product-list">
      {data.map((item) => (
        <ProductItem
          data={item}
          key={`productPanel${item.id}`}
          callback={callback}
        />
      ))}
    </ul>
  );
};

export default ProductList;
