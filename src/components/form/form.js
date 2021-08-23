import url from "../../config.js";
const Form = ({ data, comments, setComments }) => {
  const { id } = data;
  const submit = () => {
    const text = document.querySelector(".form-input").value;
    const newComment = {
      description: text,
      ticket_id: id,
      user_id: 1,
    };
    fetch(`${url}/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then((response) => console.log(response));
    setComments([...comments, newComment]);
  };

  return (
    <form className="form">
      <textarea className="form-input" placeholder="Leave a comment"></textarea>
      <div className="form-actions">
        <button className="form-submit" onClick={submit} type="button">
          Comment
        </button>
      </div>
    </form>
  );
};

export default Form;
