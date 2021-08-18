const _getStringFromStatus = (status) => {
  switch (status) {
    case "OPEN":
      return "Open";
    case "CLOSED":
      return "Closed";
    case "OVERDUE":
      return "Overdue";
    default:
      return new Error("Text out of bounds");
  }
};

const TicketStatus = ({ status }) => {
  return (
    <td className="ticket__text">
      <span
        className={`ticket__text--state ticket__text--${_getStringFromStatus(
          status
        ).toLowerCase()}`}
      >
        {_getStringFromStatus(status)}
      </span>
    </td>
  );
};

export default TicketStatus;
