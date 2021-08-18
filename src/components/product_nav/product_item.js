const ProductItem = ({ callback, data }) => {
  const { id, title, open_count, closed_count } = data;
  return (
    <li className="product" data-product={id} onClick={callback}>
      <span className="product__text">{title}</span>
      <span className="product__stats">
        <span className="product__open">{open_count}</span>
        <span className="product__closed">{closed_count}</span>
      </span>
    </li>
  );
};

export default ProductItem;
