import HeaderBar from "./header_bar.js";
import Description from "./description.js";

const Comment = ({ data }) => {
  return (
    <div className="comment">
      <HeaderBar data={data} />
      <Description data={data} />
    </div>
  );
};

export default Comment;
