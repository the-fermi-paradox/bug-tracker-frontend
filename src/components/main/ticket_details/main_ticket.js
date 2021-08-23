import Header from "../header.js";
import Comment from "./comment.js";
import Details from "./details.js";
import Form from "../../form/form.js";
import useFetch from "../../../hooks/useFetch.js";
import { useState } from "react";
import url from "../../../config.js";

const MainTicket = ({ id }) => {
  const [data, setData] = useFetch(`${url}/tickets/${id}`);
  const [comments, setComments] = useFetch(`${url}/comments/${id}`);

  return (
    <section className="main-ticket">
      {data && comments ? (
        <>
          <Header headline={data[0].title} />
          <div className="main-ticket__wrapper">
            <div className="main-ticket__vertical-wrapper">
              {/* Our main ticket */}
              <Comment data={data[0]} />
              {/* Our comments */}
              {comments.map((comment) => (
                <Comment data={comment} key={`comment${comment.id}`} />
              ))}
              <Form
                data={data[0]}
                setComments={setComments}
                comments={comments}
              />
            </div>
            <Details data={data[0]} />
          </div>
        </>
      ) : (
        <div>Loading..</div>
      )}
    </section>
  );
};

export default MainTicket;
