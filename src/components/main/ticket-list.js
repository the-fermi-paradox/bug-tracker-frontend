import useFetch from "../../hooks/useFetch.js";
import url from "../../config.js";

const TicketList = () => {
  const { data } = useFetch(`${url}/tickets`);
};

export default TicketList;
