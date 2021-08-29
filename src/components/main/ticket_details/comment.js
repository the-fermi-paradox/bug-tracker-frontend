import HeaderBar from "./header_bar.js";
import Description from "./description.js";

const Comment = ({ data, id, set, ticketId, ticket }) => {
  return (
    <div className="comment" id={id}>
      <HeaderBar data={data} set={set} ticketId={ticketId} />
      <Description data={data} />
    </div>
  );
};

export default Comment;
