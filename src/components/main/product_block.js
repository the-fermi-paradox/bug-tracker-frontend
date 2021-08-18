import ProductHeader from "./product_header.js";
import TicketList from "./ticket-list.js";

const ProductBlock = ({ product }) => {
  const name = product.title;
  return (
    <section className="bug-by-product">
      <ProductHeader name={name} />
      <TicketList id={product.id} />
    </section>
  );
};

export default ProductBlock;
