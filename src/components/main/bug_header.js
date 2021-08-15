const BugHeader = () => {
  return (
    <header className="bug-header">
      <span className="bug-header__bug bug-header__text">BUG</span>
      <span className="bug-header__status bug-header__text">STATUS</span>
      <span className="bug-header__created bug-header__text">CREATED</span>
      <span className="bug-header__due bug-header__text">DUE</span>
      <span className="bug-header__reporter bug-header__text">REPORTER</span>
    </header>
  );
};

export default BugHeader;
