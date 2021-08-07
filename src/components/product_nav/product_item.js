const ProductItem = ({ name, ticketsOpen, ticketsClosed }) => {
  return (
    <div className="product">
      <span className="product__text"></span>
      <span className="product__stats">
        <span className="product__open"></span>
        <span className="product__closed"></span>
      </span>
    </div>
  );
};

export default ProductItem;
