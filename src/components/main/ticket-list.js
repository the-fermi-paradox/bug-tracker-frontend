import useFetch from "../../hooks/useFetch.js";
import url from "../../config.js";
import TicketItem from "./ticket_item.js";

const TicketList = ({ id }) => {
  const { data } = useFetch(`${url}/tickets/by-product/${id}`);
  return (
    <div className="ticket-list-wrapper">
      {data ? (
        <table className="ticket-list">
          {data.map((ticket) => (
            <TicketItem ticket={ticket} />
          ))}
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TicketList;
