import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <input placeholder="Search the database" className="search-bar"></input>
      <FontAwesomeIcon className="search-bar__icon" icon={faSearch} />
    </div>
  );
};

export default SearchBar;
