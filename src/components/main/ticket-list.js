import useFetch from "../../hooks/useFetch.js";
import url from "../../config.js";
import TicketItem from "./ticket_item.js";

const TicketList = ({ id, callback }) => {
  const [data, setData] = useFetch(`${url}/tickets/by-product/${id}`);
  return (
    <table className="ticket-list-wrapper">
      {data ? (
        <tbody className="ticket-list">
          {data.map((ticket) => (
            <TicketItem
              callback={callback}
              key={`ticketList${ticket.id}`}
              ticket={ticket}
            />
          ))}
        </tbody>
      ) : (
        <tfoot>
          <tr>
            <td>Loading...</td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default TicketList;
