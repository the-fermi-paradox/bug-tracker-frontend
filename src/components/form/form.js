import url from "../../config.js";
import { useState } from "react";
const Form = ({ id, set }) => {
  const [text, setText] = useState(null);

  const updateText = (event) => {
    setText(event.target.value);
  };

  const submit = async () => {
    const newComment = {
      description: text,
      ticket_id: id,
      user_id: 1,
    };

    await fetch(`${url}/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    const payload = await fetch(`${url}/comments/${id}`);
    const json = await payload.json();

    set(json);
  };

  return (
    <form className="form">
      <textarea
        className="form-input"
        onInput={updateText}
        placeholder="Leave a comment"
      ></textarea>
      <div className="form-actions">
        <button className="form-submit" onClick={submit} type="button">
          Comment
        </button>
      </div>
    </form>
  );
};

export default Form;
