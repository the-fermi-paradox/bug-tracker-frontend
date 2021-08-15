import ProductHeader from "./product_header.js";

const ProductBlock = ({ product }) => {
  const name = product.title;
  return (
    <section>
      <ProductHeader name={name} />
    </section>
  );
};

export default ProductBlock;
