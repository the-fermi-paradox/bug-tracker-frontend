import TicketStatus from "./ticket_status.js";
const TicketItem = ({ ticket }) => {
  const { title, state, date_created, reporter_id } = ticket;
  return (
    <tr className="ticket">
      <td className="ticket__text ticket__text--title">{title}</td>
      <TicketStatus status={state} />
      <td className="ticket__text ticket__text--date_created">
        {new Date(date_created).toLocaleDateString("en-us")}
      </td>
      <td className="ticket__text ticket__text--date_due">
        {new Date(date_created).toLocaleDateString("en-us")}
      </td>
      <td className="ticket__text ticket__text--reporter_id">{reporter_id}</td>
    </tr>
  );
};

export default TicketItem;
