import Header from "../header.js";
import Comment from "./comment.js";
import Details from "./details.js";
import Form from "../../form/form.js";
import useFetch from "../../../hooks/useFetch.js";
import url from "../../../config.js";

const MainTicket = ({ id }) => {
  const [data] = useFetch(`${url}/tickets/${id}`);
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
                <Comment
                  data={comment}
                  set={setComments}
                  id={`comment-${comment.id}`}
                  ticketId={id}
                  key={`comment-${comment.id}`}
                />
              ))}
              <Form id={data[0].id} set={setComments} />
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
