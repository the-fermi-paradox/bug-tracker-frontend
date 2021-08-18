import ProductItem from "./product_item.js";

const ProductList = ({ sum, data, callback }) => {
  return (
    <ul className="product-list">
      <ProductItem data={sum} key="productPanel0" callback={callback} />
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
