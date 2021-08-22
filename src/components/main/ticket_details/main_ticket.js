import HeaderBar from "./header_bar.js";
import Details from "./details.js";
import Description from "./description.js";
import useFetch from "../../../hooks/useFetch.js";
import url from "../../../config.js";

const MainTicket = ({ id }) => {
  const { data } = useFetch(`${url}/tickets/${id}`);
  console.log(data);
  return (
    <section className="main-ticket">
      {data ? (
        <>
          <div className="main-ticket__wrapper">
            <HeaderBar data={data[0]} />
            <Description data={data[0]} />
          </div>
          <Details data={data[0]} />
        </>
      ) : (
        <div>Loading..</div>
      )}
    </section>
  );
};

export default MainTicket;
