import Controls from "./controls.js";

const HeaderBar = ({ data, ticketId, set }) => {
  const { user_name, date_created } = data;
  return (
    <div className="ticket-header">
      <span className="ticket-header__text">{`${user_name} commented ${new Date(
        date_created
      ).toLocaleDateString("en-US")}`}</span>
      <Controls set={set} ticketId={ticketId} />
    </div>
  );
};

export default HeaderBar;
