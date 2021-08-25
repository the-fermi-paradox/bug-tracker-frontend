import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import url from "../../../config.js";

const Controls = ({ id, ticketId, set }) => {
  const remove = async (event) => {
    const id = event.target.closest(".comment").id.split("-")[1];
    const res = await fetch(`${url}/comments/${id}`, { method: "DELETE" });
    console.log(res);
    const payload = await fetch(`${url}/comments/${ticketId}`);
    const json = await payload.json();
    set(json);
  };
  return (
    <div className="comment-controls">
      <button type="button" className="comment-controls__button">
        <FontAwesomeIcon
          icon={faTrash}
          onClick={remove}
          className="comment-controls__icon"
        />
      </button>
      <button type="button" className="comment-controls__button">
        <FontAwesomeIcon icon={faEdit} className="comment-controls__icon" />
      </button>
    </div>
  );
};

export default Controls;
