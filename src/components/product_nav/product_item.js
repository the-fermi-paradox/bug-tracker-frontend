const ProductItem = ({ data }) => {
  const { title, open_count, closed_count } = data;
  return (
    <div className="product">
      <span className="product__text">{title}</span>
      <span className="product__stats">
        <span className="product__open">{open_count}</span>
        <span className="product__closed">{closed_count}</span>
      </span>
    </div>
  );
};

export default ProductItem;
