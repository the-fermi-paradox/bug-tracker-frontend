import TicketStatus from "./ticket_status.js";
const TicketItem = ({ callback, ticket }) => {
  const { id, title, state, date_created, due_date, reporter_id } = ticket;
  return (
    <tr className="ticket" onClick={callback} data-ticket={id}>
      <td className="ticket__text ticket__text--title">{title}</td>
      <TicketStatus status={state} />
      <td className="ticket__text ticket__text--date_created">
        {new Date(date_created).toLocaleDateString("en-us", {
          month: "2-digit",
          day: "2-digit",
        })}
      </td>
      <td className="ticket__text ticket__text--date_due">
        {new Date(due_date).toLocaleDateString("en-us", {
          month: "2-digit",
          day: "2-digit",
        })}
      </td>
      <td className="ticket__text ticket__text--reporter_id">{reporter_id}</td>
    </tr>
  );
};

export default TicketItem;
