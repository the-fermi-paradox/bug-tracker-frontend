import ProductHeader from "./product_header.js";
import TicketList from "./ticket-list.js";

const ProductBlock = ({ product, callback }) => {
  const name = product.title;
  return (
    <section className="bug-by-product">
      <ProductHeader name={name} />
      <TicketList callback={callback} id={product.id} />
    </section>
  );
};

export default ProductBlock;
