const Details = ({ data }) => {
  const { id, flavor, priority, severity, due_date } = data;
  return (
    <div className="details-panel">
      <span className="details-panel__text details-panel__id">{id}</span>
      <span className="details-panel__text details-panel__flavor">
        {flavor}
      </span>
      <span className="details-panel__text details-panel__priority">
        {priority}
      </span>
      <span className="details-panel__text details-panel__severity">
        {severity}
      </span>
      <span className="details-panel__text details-panel__due_date">
        {new Date(due_date).toLocaleDateString("en-US")}
      </span>
    </div>
  );
};

export default Details;
