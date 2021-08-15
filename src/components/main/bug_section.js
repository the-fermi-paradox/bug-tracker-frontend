import BugHeader from "./bug_header.js";
import ProductBlock from "./product_block.js";
import useFetch from "../../hooks/useFetch.js";
import url from "../../config.js";

const BugSection = () => {
  const { data } = useFetch(`${url}/products/`);
  return (
    <section className="bug-section">
      <BugHeader />
      {data ? (
        <div className="bug-groups">
          {data.map((product) => (
            <ProductBlock product={product} />
          ))}
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </section>
  );
};

export default BugSection;
