import { useEffect } from "react";

const useSubmit = (url, text, id, setOldState) => {
  useEffect(() => {
    const newComment = {
      description: text,
      ticket_id: id,
      user_id: 1,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then((response) => console.log(response));

    fetch(url)
      .then((payload) => payload.json())
      .then((json) => setOldState(json));
  }, [url, id, text, setOldState]);
};

export default useSubmit;
