import ProductItem from "./product_item.js";

const ProductList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <ProductItem data={item} />
      ))}
    </div>
  );
};

export default ProductList;
