import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="product__header">
      <h2 className="product__headline">Products</h2>
      <span className="square-wrapper">
        <FontAwesomeIcon className="square--open" icon={faSquare} />
        <FontAwesomeIcon className="square--closed" icon={faSquare} />
      </span>
    </div>
  );
};

export default Header;
