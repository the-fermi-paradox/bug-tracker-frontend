const _parsePriority = (priority) => {
  switch (priority) {
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    default:
      return "Undefined";
  }
};

const Details = ({ data }) => {
  const { id, flavor, priority, severity, due_date } = data;
  return (
    <div className="details-panel">
      <div className="details-panel__block">
        <span className="details_panel__label">Ticket ID</span>
        <span className="details-panel__text details-panel__id">{id}</span>
      </div>
      <div className="details-panel__block">
        <span className="details_panel__label">Type</span>
        <span className="details-panel__text details-panel__flavor">
          {flavor}
        </span>
      </div>
      <div className="details-panel__block">
        <span className="details_panel__label">Priority</span>
        <span className="details-panel__text details-panel__priority">
          {_parsePriority(priority)}
        </span>
      </div>
      <div className="details-panel__block">
        <span className="details_panel__label">Severity</span>
        <span className="details-panel__text details-panel__severity">
          {_parsePriority(severity)}
        </span>
      </div>
      <div className="details-panel__block">
        <span className="details_panel__label">Due</span>
        <span className="details-panel__text details-panel__due_date">
          {new Date(due_date).toLocaleDateString("en-US")}
        </span>
      </div>
    </div>
  );
};

export default Details;
