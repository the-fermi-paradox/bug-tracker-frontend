const Header = ({ headline }) => {
  return (
    <div className="main-header">
      <h2 className="main-header__headline">{headline}</h2>
      <button className="main-header__submit-bug">Submit Bug</button>
    </div>
  );
};

export default Header;
