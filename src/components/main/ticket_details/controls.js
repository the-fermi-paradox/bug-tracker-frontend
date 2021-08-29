import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import refresh from "../../../helpers/refresh.js";
import url from "../../../config.js";

const Controls = ({ id, ticketId, set }) => {
  const remove = async (event) => {
    const id = event.target.closest(".comment").id.split("-")[1];
    await fetch(`${url}/comments/${id}`, { method: "DELETE" });
    refresh(`${url}/comments/${ticketId}`, set);
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
