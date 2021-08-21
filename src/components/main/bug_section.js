import BugHeader from "./bug_header.js";
import ProductBlock from "./product_block.js";
import useFetch from "../../hooks/useFetch.js";
import url from "../../config.js";

const BugSection = ({ currentProduct, callback }) => {
  const { data } = useFetch(`${url}/products/`);
  return (
    <section className="bug-section">
      <BugHeader />
      {data ? (
        <div className="bug-groups">
          {data
            .filter(
              (product) => product.id == currentProduct || !currentProduct
            )
            .map((product) => (
              <ProductBlock
                key={`ticketBlock${product.id}`}
                product={product}
                callback={callback}
              />
            ))}
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </section>
  );
};

export default BugSection;
