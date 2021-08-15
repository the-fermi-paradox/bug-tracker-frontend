const _makePresentable = (text) => {
  switch (text) {
    case "closed_count":
      return "Bugs Closed";
    case "open_count":
      return "Bugs Open";
    case "overdue_count":
      return "Overdue";
    case "today_count":
      return "Due Today";
    case "week_count":
      return "Due 7 Days";
    default:
      return new Error("text out of bounds");
  }
};

const StatsCard = ({ name, value }) => {
  const subtitle = _makePresentable(name);
  return (
    <div className={`stats-card ${name}`}>
      <h3>{value}</h3>
      <span>{subtitle}</span>
    </div>
  );
};

export default StatsCard;
