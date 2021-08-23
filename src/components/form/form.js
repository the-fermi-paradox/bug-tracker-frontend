import url from "../../config.js";
const Form = ({ data }) => {
  const { id } = data;
  const submit = () => {
    const text = document.querySelector(".form-input").value;
    fetch(`${url}/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: text,
        ticket_id: id,
        user_id: 1,
      }),
    }).then((response) => console.log(response));
  };

  return (
    <form class="form">
      <textarea class="form-input" placeholder="Leave a comment"></textarea>
      <div class="form-actions">
        <button class="form-submit" onClick={submit} type="button">
          Comment
        </button>
      </div>
    </form>
  );
};

export default Form;
