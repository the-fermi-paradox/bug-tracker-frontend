import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ProductHeader = ({ name }) => {
  return (
    <div className="bug-product-title">
      <h3 className="product-headline">{name}</h3>
      <button className="product-add-button">
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </div>
  );
};

export default ProductHeader;
