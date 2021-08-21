const HeaderBar = ({ data }) => {
  const { user_name, date_created } = data;
  return (
    <div className="ticket-header">
      <span className="ticket-header__text">{`${user_name} commented ${date_created}`}</span>
    </div>
  );
};

export default HeaderBar;
